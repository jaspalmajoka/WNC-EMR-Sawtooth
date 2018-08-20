const {
  createHash
} = require('crypto');
const {
  CryptoFactory,
  createContext
} = require('sawtooth-sdk/signing');
const {
  protobuf
} = require('sawtooth-sdk');
const fs = require('fs');
const fetch = require('node-fetch');
const {
  Secp256k1PrivateKey
} = require('sawtooth-sdk/signing/secp256k1');
const path = require('path');

const config = require('./../config');
const {
  hash,
  getUserPriKey,
  getUserPubKey,
  createAddress
} = require('./helper');


const KEYS_LOCATION = process.env.KEYS_LOCATION || path.join(__dirname, config.keyslocation);
console.log(KEYS_LOCATION);
class SawtoothWalletClient {
  constructor(userId, type) {
    const privateKeyStrBuf = getUserPriKey(userId, KEYS_LOCATION);
    const privateKeyStr = privateKeyStrBuf.toString().trim();
    const context = createContext('secp256k1');
    const privateKey = Secp256k1PrivateKey.fromHex(privateKeyStr);
    this.signer = new CryptoFactory(context).newSigner(privateKey);
    this.publicKey = this.signer.getPublicKey().asHex();
    this.address = config.family.namespace;
    this.type = type;
    console.debug(`Using ${userId} credentials under ${this.address} family`);
  }

  /**
   * 
   * @param {*} payload 
   * @param {*HttpResponse} res 
   */
  async submit(payload, res) {
    payload.timestamp = new Date().toUTCString();
    payload.Data.timestamp = new Date().toUTCString();
    const transaction = await this._wrapTransaction(payload)
    const transactions = [transaction];
    const batch = await this._wrapBatch(transactions);
    const batches = [batch];
    const batchListBytes = await this._wrapBatchList(batches);
    return this._postBatches(batchListBytes).then((data) => {
        if (data && data.link) {
          // Will return batch id along with batch status url
          data.batch_id = data.link.split('?id=')[1];
          data.address = payload.Data && payload.Data.id ? `${createAddress(payload.Data.id, config.namespace[this.type])}` : "";
        }
        Object.assign(data, payload);
        return res.status(201).send({
          success: true,
          data
        }).end();
      })
      .catch((err) => {
        return res.status(500).send({
          success: false,
          err
        }).end();
      });
  }

  _wrapTransaction(payload) {
    return new Promise(resolve => {
      const address = this.address;
      const inputAddressList = [address];
      const outputAddressList = [address];
      const payloadBytes = Buffer.from(new String(JSON.stringify(payload)));
      const transactionHeaderBytes = protobuf.TransactionHeader.encode({
        familyName: config.family.name,
        familyVersion: config.family.version,
        inputs: inputAddressList,
        outputs: outputAddressList,
        signerPublicKey: this.signer.getPublicKey().asHex(),
        nonce: `${Math.random()}`,
        batcherPublicKey: this.signer.getPublicKey().asHex(),
        dependencies: [],
        payloadSha512: hash(payloadBytes),
      }).finish();
      const transaction = protobuf.Transaction.create({
        header: transactionHeaderBytes,
        headerSignature: this.signer.sign(transactionHeaderBytes),
        payload: payloadBytes
      });
      resolve(transaction);
    });
  }

  _wrapBatch(transactions) {
    return new Promise(resolve => {
      const batchHeaderBytes = protobuf.BatchHeader.encode({
        signerPublicKey: this.signer.getPublicKey().asHex(),
        transactionIds: transactions.map((txn) => txn.headerSignature),
      }).finish();
      const batchSignature = this.signer.sign(batchHeaderBytes);
      const batch = protobuf.Batch.create({
        header: batchHeaderBytes,
        headerSignature: batchSignature,
        transactions: transactions,
      });
      resolve(batch);
    });
  }

  _wrapBatchList(batches) {
    return new Promise(resolve => {
      const batchListBytes = protobuf.BatchList.encode({
        batches
      }).finish();
      resolve(batchListBytes);
    });
  }

  _postBatches(batchListBytes) {
    return fetch(`${config.restapi}/batches`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream'
        },
        body: batchListBytes
      })
      .then((response) => response.json())
  }
}

module.exports = SawtoothWalletClient;
