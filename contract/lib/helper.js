const { createHash } = require('crypto');
const { InternalError, InvalidTransaction } = require('sawtooth-sdk/processor/exceptions');
const fs = require('fs');
const config = require('./../config');

const encodePayload = (value) => Buffer.from(new String(JSON.stringify(value)));
const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

module.exports = {
    leafHash,
    toInvalidTransaction: (err) => { throw new InvalidTransaction(err.message ? err.message : err) },
    toInternalError: (err) => { throw new InternalError(err.message ? err.message : err) },
    setEntry: (context, address, newStateValue) => {
        const entries = {
            [address]: encodePayload(newStateValue),
        };
        return context.setState(entries);
    },
    decodePayload: (buffer) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.parse(buffer.toString()))
            } catch (error) {
                reject(error);
            }
        });
    },
    createAddress: (name) => `${config.family.namespace}${leafHash(name, 64)}`,
}