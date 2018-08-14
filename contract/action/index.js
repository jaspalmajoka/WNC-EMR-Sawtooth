const { toInvalidTransaction } = require('./../lib/helper');

const { createPatient, deletePatient, updatePatient } = require('./patient');
const { addDocument, deleteDocument } = require('./document');
const { addHospital, deleteHospital } = require('./hospital');

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
            case 'addDocument':
                return addDocument({ context, data: Data });
            case 'deleteDocument':
                return deleteDocument({ context, data: Data });
            case 'addHospital':
                return addHospital({ context, data: Data });
            case 'deleteospital':
                return deleteHospital({ context, data: Data });
            default:
                return toInvalidTransaction(`Action ${Action} is not valid`);
        }
    }
}