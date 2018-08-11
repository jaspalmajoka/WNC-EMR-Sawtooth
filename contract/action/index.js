const { createPatient, deletePatient, updatePatient } = require('./patient');
const { toInvalidTransaction } = require('./../lib/helper');

module.exports = {
    performTransaction: (txRequest, context, payload) => {
        const { Action, Data } = payload;
        switch (Action) {
            case 'createPatient':
                return createPatient({ context, data: Data });
            case 'deletePatient':
                return deletePatient({ context, data: Data });
            case 'updatePatient':
                return updatePatient({ context, data: Data });
            default:
                return toInvalidTransaction(`Action ${Action} is not valid`);
        }
    }
}