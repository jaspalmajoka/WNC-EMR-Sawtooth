const config = require('./../config');
const { createAddress, toInvalidTransaction, setEntry } = require('./../lib/helper');

const _createAddress = (id) => createAddress(id, config.namespace.patient);

module.exports = {
    createPatient: async ({ context, data }) => {
        const { id } = data;
        const address = _createAddress(id);
        const possibleAddressValues = await context.getState([address]).catch(toInvalidTransaction);
        const stateValueRep = possibleAddressValues[address];
        let stateValue;
        if (stateValueRep && stateValueRep.length) {
            stateValue = JSON.parse(stateValueRep)
            if (stateValue) {
                return toInvalidTransaction('Patient ID already taken');
            }
        }
        stateValue = data;
        return setEntry(context, address, stateValue).catch(toInvalidTransaction);
    },
    deletePatient: async ({ context, data }) => {
        const { id } = data;
        const address = _createAddress(id);
        // Check if patient record is created already
        // If not deletion will not be required
        if (!stateValuerep || stateValuerep.length === 0) {
            return toInvalidTransaction(`No patient record found to be created with this ${id}`);
        }
        // Since the delete request is raised this transaction 
        // An NULL value is set mark empty
        return setEntry(context, address, null).catch(toInvalidTransaction);
    },
    updatePatient: async ({ context, data }) => {
        const { id } = data;
        const address = _createAddress(id);
        const possibleAddressValues = await context.getState([address]).catch(toInvalidTransaction);
        const stateValuerep = possibleAddressValues[address];
        let stateValue;
        // Check if patient record is created already
        if (stateValuerep && stateValuerep.length) {
            stateValue = JSON.parse(stateValuerep);
            if (!stateValue) {
                return toInvalidTransaction(`No patient record found to be created with this ${id}`);
            }
        } else {
            return toInvalidTransaction(`No patient record found to be created with this ${id}`);
        }
        Object.assign(stateValue, data);
        return setEntry(context, address, stateValue).catch(toInvalidTransaction);
    }
}