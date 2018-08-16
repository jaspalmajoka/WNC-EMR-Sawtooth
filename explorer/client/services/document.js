const uuid = require('uuid/v4');
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
const _getDocuments = (id, callback) => {
    let address;
    if (id) {
        address = `${createAddress(id, config.namespace.document)}`
    } else {
        address = `${createAddress('', config.namespace.document)}`
    }
    getState(address)
        .then((data) => callback(null, data)).catch((err) => callback(err))
}


module.exports = {
    getDocument: (req, res) => {
        const { id } = req.query;
        _getDocuments(id, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.json({ success: true, data });
        })
    },
    addDocument: (req, res) => {
        const id = uuid();
        const Action = 'addDocument';
        const documentData = req.body;
        documentData.id = id;
        if (!documentData.patientId) {
            return res.status(400).send({ success: false, err: 'Field patientId is missing.' }).end();
        }
        return sawtoothWalletClient.submit({ Action, Data: documentData }, res);
    },
    deleteDocument: (req, res) => {
        const Action = 'deleteDocument';
        const { id } = req.params;
        return sawtoothWalletClient.submit({ Action, Data: { id } }, res);
    }
}