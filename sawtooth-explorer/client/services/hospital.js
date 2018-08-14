const uuid = require('uuid/v4');
const config = require('./../config');
const { getState, createAddress } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);


/**
 * Creates patient address with supplied patient id
 * and makes an API call to RestAPI with the address to 
 * reteive the data of patient from state
 * 
 * @param {*patientId} id 
 * @param {*Error,DataArray} callback 
 */
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