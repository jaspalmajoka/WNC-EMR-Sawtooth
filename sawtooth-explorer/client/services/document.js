const uuid = require('uuid/v4');
const config = require('./../config');
const { getState, createAddress, getDiffProperties } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
    addDocument: (req, res) => {
        const id = uuid();
        const Action = 'addDocument';
        const documentData = req.body;
        documentData.id = id;
        if (!documentData.patientId) {
            return res.status(400).send({ success: false, err: 'Field patientId is missing.' }).end();
        }
        return sawtoothWalletClient.submit({ Action, Data: documentData })
            .then((data) => {
                return res.status(201).send({ success: true, data }).end();
            })
            .catch((err) => {
                return res.status(500).send({ success: false, err }).end();
            });
    },
    deleteDocument: (req, res) => {
        const Action = 'deleteDocument';
        const { id } = req.params;
        return sawtoothWalletClient.submit({ Action, Data: { id } })
            .then((data) => {
                return res.status(200).send({ success: true, data }).end();
            })
            .catch((err) => {
                return res.status(500).send({ success: false, err }).end();
            });
    }
}