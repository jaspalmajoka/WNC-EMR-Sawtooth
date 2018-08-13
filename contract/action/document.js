const config = require('./../config');
const { createAddress, toInvalidTransaction, setEntry } = require('./../lib/helper');

const _createDocumentAddress = (id) => createAddress(id, config.namespace.document);
const _createPatienttAddress = (id) => createAddress(id, config.namespace.patient);

module.exports = {
    addDocument: async ({ context, data }) => {
        const { documentId, patientId } = data;
        const documentAddress = _createDocumentAddress(id);
    },
    deleteDocument: async ({ context, data }) => {

    }
}