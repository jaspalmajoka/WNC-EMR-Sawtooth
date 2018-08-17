const {
    toInvalidTransaction
} = require('./../lib/helper');

const {
    createPatient,
    deletePatient,
    updatePatient
} = require('./patient');
const {
    addDocument,
    deleteDocument
} = require('./document');
const {
    addHospital,
    deleteHospital
} = require('./hospital');
const {
    userLogin,
    userRegister,
    userUpdate
} = require('./user');

module.exports = {
    performTransaction: (txRequest, context, payload) => {
        const {
            Action,
            Data
        } = payload;
        let promise;
        switch (Action) {
            case 'createPatient':
                promise = createPatient;
            case 'deletePatient':
                promise = deletePatient;
            case 'updatePatient':
                promise = updatePatient;
            case 'addDocument':
                promise = addDocument;
            case 'deleteDocument':
                promise = deleteDocument;
            case 'addHospital':
                promise = addHospital;
            case 'deleteHospital':
                promise = deleteHospital;
            case 'userRegister':
                promise = userRegister;
            case 'userLogin':
                promise = userLogin;
            case 'userUpdate':
                promise = userUpdate;
            default:
                return toInvalidTransaction(`Action ${Action} is not valid`);
        }
        return promise({
            context,
            data: Data
        });
    }
}