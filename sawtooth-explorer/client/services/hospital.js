const uuid = require('uuid/v4');
const config = require('./../config');
const { getState, createAddress } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);



const _getHospitals = (id, callback) => {
    let address;
    if (id) {
        address = `${createAddress(id, config.namespace.hospital)}`;
    } else {
        address = `${createAddress('', config.namespace.hospital)}`;
    }
    getState(address)
        .then((data) => callback(null, data)).catch((err) => callback(err));
}