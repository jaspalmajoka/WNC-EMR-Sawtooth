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
const {
    createAppointment
} = require('./appointment');

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
                break;
            case 'deletePatient':
                promise = deletePatient;
                break;
            case 'updatePatient':
                promise = updatePatient;
                break;
            case 'addDocument':
                promise = addDocument;
                break;
            case 'deleteDocument':
                promise = deleteDocument;
                break;
            case 'addHospital':
                promise = addHospital;
                break;
            case 'deleteHospital':
                promise = deleteHospital;
                break;
            case 'userRegister':
                promise = userRegister;
                break;
            case 'userLogin':
                Data.timestamp = payload.timestamp;
                promise = userLogin;
                break;
            case 'userUpdate':
                // Data.timestamp = payload.timestamp;
                promise = userUpdate;
                break;
            case 'createAppointment':
                Data.timestamp = payload.timestamp;
                promise = createAppointment;
                break;
            default:
                return toInvalidTransaction(`Action ${Action} is not valid`);
        }
        return promise({
            context,
            data: Data
        });
    }
}