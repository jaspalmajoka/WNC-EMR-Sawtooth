const config = require('./../config');
const { createAddress, toInvalidTransaction, setEntry } = require('./../lib/helper');

module.exports = {
    createPatient: async ({ context, data }) => {
        const { id } = data;
        const address = createAddress(id);
        const possibleAddressValues = await context.getState([address]).catch(toInvalidTransaction);
        const stateValueRep = possibleAddressValues[address];
        let stateValue;
        if (stateValue && stateValue.length) {
            stateValue = JSON.parse(stateValueRep)
            if (stateValue) {
                return toInvalidTransaction('Patient ID already taken');
            }
        }
        stateValue = data;
        return setEntry(context, address, stateValue).catch(toInvalidTransaction);
    }

}