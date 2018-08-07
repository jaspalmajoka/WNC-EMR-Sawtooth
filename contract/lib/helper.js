const { createHash } = require('crypto');
const { InternalError, InvalidTransaction } = require('sawtooth-sdk/processor/exceptions');
const fs = require('fs');

module.exports = {
    leafHash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    hash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    toInvalidTransaction: (err) => { throw new InvalidTransaction(err.message ? err.message : err) },
    toInternalError: (err) => { throw new InternalError(err.message ? err.message : err) },
    setEntry: (context, address, newStateValue) => {
        const entries = {
            [address]: Buffer.from(new String(JSON.stringify(newStateValue)))
        };
        return context.setState(entries);
    },
}