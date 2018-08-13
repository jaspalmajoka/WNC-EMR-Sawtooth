const { createHash } = require('crypto');
const { InternalError, InvalidTransaction } = require('sawtooth-sdk/processor/exceptions');
const fs = require('fs');
const config = require('./../config');

const encodePayload = (value) => value ? Buffer.from(new String(JSON.stringify(value))) : null;
const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

module.exports = {
    leafHash,
    encodePayload,
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
    createAddress: (name, usernamespace = '00') => `${config.family.namespace}${usernamespace}${leafHash(name, 64 - usernamespace.length)}`,
}