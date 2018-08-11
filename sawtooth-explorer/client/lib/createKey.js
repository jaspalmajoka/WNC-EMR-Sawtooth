const { createContext, CryptoFactory } = require('sawtooth-sdk/signing')
const fs = require('fs');
const config = require('./../config');

const KEYS_LOCATION = process.env.KEYS_LOCATION || config.keyslocation;

const context = createContext('secp256k1')
const privateKey = context.newRandomPrivateKey()

fs.writeFileSync(`${KEYS_LOCATION}${config.client}.priv`, privateKey.privateKeyBytes.toString('hex'));
