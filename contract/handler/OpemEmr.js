const {
    TransactionHandler
} = require('sawtooth-sdk/processor/handler');
const config = require('./../config');
const {
    decodePayload,
    toInvalidTransaction,
    toInternalError
} = require('./../lib/helper');
const {
    performTransaction
} = require('./../action');

class OpemEmr extends TransactionHandler {
    constructor() {
        super(config.family.name, config.family.versions, config.family.namespaces)
    }

    apply(txRequest, context) {
        return decodePayload(txRequest.payload)
            .then((payload) => {
                console.debug(`Payload Received ${JSON.stringify(payload)}`);
                return performTransaction(txRequest, context, payload)
                    .then((addressOutputs) => {
                        if (addressOutputs.length === 0) {
                            return toInternalError('State Error');
                        }
                        console.debug(`Completed ${JSON.stringify(addressOutputs)}`);
                    })
                    .catch(toInvalidTransaction);
            }).catch(toInvalidTransaction);
    }
}

module.exports = OpemEmr;