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

module.exports = {
    getHospital: (req, res) => {
        const { id } = req.query;
        _getHospitals(id, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.json({ success: true, data });
        });
    },
    addHospital: (req, res) => {
        const id = uuid();
        const Action = 'addHospital';
        const hospitalData = req.body;
        hospitalData.id = id;
        hospitalData.timestamp = new Date().toUTCString();
        return sawtoothWalletClient.submit({ Action, Data: hospitalData });
    },
    deleteHospital: (req, res) => {
        const Action = 'deleteHospital';
        const { id } = req.params;
        return sawtoothWalletClient.submit({ Action, Data: { id } });
    }
}