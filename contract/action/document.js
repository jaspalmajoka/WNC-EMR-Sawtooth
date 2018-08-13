const config = require('./../config');
const { createAddress, toInvalidTransaction, setEntry } = require('./../lib/helper');

const _createDocumentAddress = (id) => createAddress(id, config.namespace.document);
const _createPatienttAddress = (id) => createAddress(id, config.namespace.patient);

module.exports = {
    addDocument: async ({ context, data }) => {
        const { id, patientId } = data;
        const documentAddress = _createDocumentAddress(id);
        const patientAddress = _createPatienttAddress(patientId);
        const possibleAddressValues = await context.getState([documentAddress, patientAddress]).catch(toInvalidTransaction);

        let patientStateValueRep = possibleAddressValues[patientAddress];
        let documenttStateValueRep = possibleAddressValues[documentAddress];

        let patientStateValue;
        let documentStateValue;
        // Check if patient record exists
        if (!patientStateValueRep && patientStateValueRep.length === 0) {
            return toInvalidTransaction(`No patient record - ${patientId}`);
        }
        patientStateValue = JSON.parse(patientStateValueRep);
        // If no document attached start fresh list
        if (patientStateValue.documents) {
            patientStateValue.documents = [];
        }
        delete data.patientId;
        patientStateValue.documents.push(data);
        // TODO Possibly create an asset with the document
        return setEntry(context, address, patientStateValue).catch(toInvalidTransaction);
    },
    deleteDocument: async ({ context, data }) => {

    }
}