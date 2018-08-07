const { TransactionHandler } = require('sawtooth-sdk/processor/handler');
const config = require('./../config');
const { decodePayload, toInvalidTransaction } = require('./../lib/helper');

class OpemEmr extends TransactionHandler {
    constructor() {
        super(config.family.name, config.family.versions, family.namespaces)
    }

    apply(txRequest, context) {
        return decodePayload(txRequest.payload)
            .then((payload) => {
                console.debug(`Payload Received ${JSON.stringify(payload)}`);
            }).catch(toInvalidTransaction);
    }
}

module.exports = OpemEmr;