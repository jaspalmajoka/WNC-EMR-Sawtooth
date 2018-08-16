const config = require('./../config');
const { getState, createAddress, getDiffProperties } = require('./../lib/helper');
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
const _getPatients = (id, callback) => {
    let address;
    if (id) {
        address = `${createAddress(id, config.namespace.patient)}`
    } else {
        address = `${createAddress('', config.namespace.patient)}`
    }
    getState(address)
        .then((data) => callback(null, data)).catch((err) => callback(err))
}

module.exports = {
    register: (req, res) => {
        const { id } = req.body;
        const Action = 'userRegister';
        const userData = req.body;
        userData.timestamp = new Date().toUTCString();

        if (!id) {
            return res.status(400).send({ success: false, message: 'ID Field Missing in payload' }).end();
        }
        else {
            return sawtoothWalletClient.submit({ Action, Data: userData });
        }
    },
    login: (req, res) => {
        const { id } = req.body;
        const Action = 'userLogin';
        const userData = req.body;
        userData.timestamp = new Date().toUTCString();

        if (!id) {
            return res.status(400).send({ success: false, message: 'ID Field Missing in payload' }).end();
        }
        else {
            return sawtoothWalletClient.submit({ Action, Data: userData });
        }
    }
}