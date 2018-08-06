const { createHash } = require('crypto');
const { CryptoFactory, createContext } = require('sawtooth-sdk/signing');
const { protobuf } = require('sawtooth-sdk');
const fs = require('fs');
const fetch = require('node-fetch');
const { Secp256k1PrivateKey } = require('sawtooth-sdk/signing/secp256k1');

const config = require('./../config');
const { hash, getUserPriKey, getUserPubKey } = require('./helper');

const KEYS_LOCATION = config.keyslocation;

class SawtoothWalletClient {
    constructor(userId) {
        const privateKeyStrBuf = getUserPriKey(userId);
        const privateKeyStr = privateKeyStrBuf.toString().trim();
        const context = createContext('secp256k1');
        const privateKey = Secp256k1PrivateKey.fromHex(privateKeyStr);
        this.signer = new CryptoFactory(context).newSigner(privateKey);
        this.publicKey = this.signer.getPublicKey().asHex();
        this.address = config.family.namespace;
        console.debug(`Using ${userId} credentials under ${this.address} family`);
    }

    async submit(payload, response) {
        const transaction = await this._wrapTransaction(payload)
        const transactions = [transaction];
        const batch = await this._wrapBatch(transactions);
        const batches = [batch];
        const batchListBytes = await this._wrapBatchList(batches);
        await this._postBatches(batchListBytes)
            .then((result) => {
                res.send(result).end();
            })
            .catch((err) => {
                res.status(400).send(err).end();
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