const { TransactionHandler } = require('sawtooth-sdk/processor/handler');
const config = require('./../config');

class OpemEmr extends TransactionHandler {
    constructor() {
        super(config.family.name, config.family.versions, family.namespaces)
    }

    apply(txRequest, context) {

    }
}

module.exports = OpemEmr;