const config = require('./../config');
const {
    createAddress,
    toInvalidTransaction,
    setEntry,
    toInvalidPayload,
    encodePayload
} = require('./../lib/helper');

const _createHospitalAddress = (id) => createAddress(id, config.namespace.hospital);

module.exports = {
    addHospital: async ({
        context,
        data
    }) => {
        const {
            id
        } = data;
        if (!id) {
            return toInvalidPayload('id');
        }
        let stateValue = {};
        const hospitalAddress = _createHospitalAddress(id);
        const possibleAddressValues = await context.getState([hospitalAddress]).catch(toInvalidTransaction);
        let hospitalStateValueRep = possibleAddressValues[hospitalAddress];
        // Check if hospital exists with same id
        if (hospitalStateValueRep && hospitalStateValueRep.length) {
            stateValue = JSON.parse(hospitalStateValueRep);
            if (stateValue) {
                return toInvalidTransaction('Hospital ID is already taken');
            }
        }
        stateValue = data;
        return setEntry(context, hospitalAddress, stateValue).catch(toInvalidTransaction);
    },
    updateHospital: async ({
        context,
        data
    }) => {
        const {
            id
        } = data;
        if (!id) {
            return toInvalidPayload('id');
        }
        let stateValue = {};
        const hospitalAddress = _createHospitalAddress(id);
        const possibleAddressValues = await context.getState([hospitalAddress]).catch(toInvalidTransaction);
        let hospitalStateValueRep = possibleAddressValues[hospitalAddress];
        // Check if hospital exists with same id
        if (hospitalStateValueRep && hospitalStateValueRep.length) {
            stateValue = JSON.parse(hospitalStateValueRep);
        }
        Object.assign(stateValue, data);
        return setEntry(context, hospitalAddress, stateValue).catch(toInvalidTransaction);
    },
    deleteHospital: async ({
        context,
        data
    }) => {
        const {
            id
        } = data;
        if (!id) {
            return toInvalidPayload('id');
        }
        const hospitalAddress = _createHospitalAddress(id);
        const possibleAddressValues = await context.getState([hospitalAddress]).catch(toInvalidTransaction);
        const stateValueRep = possibleAddressValues[hospitalAddress];
        // Check if the hospital is created already
        // If not deleteion will be required in the state
        if (!stateValueRep || stateValueRep.length === 0) {
            return toInvalidTransaction(`No Hospital found to created with ${id} Id`);
        }
        // Since delete request came in address state 
        // will be removed  
        return context.deleteState([hospitalAddress]).catch(toInvalidTransaction);
    }
}