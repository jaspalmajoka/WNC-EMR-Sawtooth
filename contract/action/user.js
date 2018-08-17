const config = require('./../config');
const {
    createAddress,
    toInvalidTransaction,
    setEntry,
    encodePayload
} = require('./../lib/helper');

const _createUserAddress = (id) = createAddress(id, config.namespace.user);

module.exports = {
    userLogin: async ({
        context,
        data
    }) => {
        const {
            id
        } = data;
    },
    userRegister: async ({
        context,
        data
    }) => {
        const {
            id
        } = data;
    },
    userUpdate: async ({
        context,
        data
    }) => {
        const {
            id
        } = data;
    },
};