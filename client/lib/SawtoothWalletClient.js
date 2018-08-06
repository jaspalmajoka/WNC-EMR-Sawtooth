const { createHash } = require('crypto');
const { CryptoFactory, createContext } = require('sawtooth-sdk/signing');
const { protobuf } = require('sawtooth-sdk');
const fs = require('fs');
const fetch = require('node-fetch');
const { Secp256k1PrivateKey } = require('sawtooth-sdk/signing/secp256k1');
const config = require('./../config');
