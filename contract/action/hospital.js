const config = require('./../config');
const { createAddress, toInvalidTransaction, setEntry, encodePayload } = require('./../lib/helper');

const _createHospitalAddress = (id) => createAddress(id, config.namespace.hospital);

module.exports = {
    addHospital: async ({ context, data }) => {
        const { id } = data;
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
    deleteHospital: async ({ context, data }) => {

    }
}