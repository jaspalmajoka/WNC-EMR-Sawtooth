const { createHash } = require('crypto');
const { InternalError, InvalidTransaction } = require('sawtooth-sdk/processor/exceptions');
const fs = require('fs');

const encodePayload = (value) => Buffer.from(new String(JSON.stringify(value)));

module.exports = {
    leafHash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    hash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    toInvalidTransaction: (err) => { throw new InvalidTransaction(err.message ? err.message : err) },
    toInternalError: (err) => { throw new InternalError(err.message ? err.message : err) },
    setEntry: (context, address, newStateValue) => {
        const entries = {
            [address]: encodePayload(newStateValue),
        };
        return context.setState(entries);
    },
    decodePayload: (buffer) => {
        new Promise((resolve, reject) => {
            try {
                resolve(JSON.parse(buffer.toString()))
            } catch (error) {
                reject(error);
            }
        });
    },
}