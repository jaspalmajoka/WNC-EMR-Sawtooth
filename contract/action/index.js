const { createPatient } = require('./patient');
const { toInvalidTransaction } = require('./../lib/helper');

module.exports = {
    performTransaction: (txRequest, context, payload) => {
        const { Action, Data } = payload;
        switch (Action) {
            case 'createPatient':
                return createPatient({ context, data: Data });
            default:
                return toInvalidTransaction(`Action ${Action} is not valid`);
        }

    }
}