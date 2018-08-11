const uuid = require('uuid/v4');
const config = require('./../config');
const { getState, createAddress, getDiffProperties } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
    addDocumet: (req, res) => {
        const id = uuid();
        const Action = 'addDocument';
        const documentData = req.body;
        if (Object.keys(req.body).length >= 0) {
            return sawtoothWalletClient.submit({ Action, Data: req.body })
                .then((data) => {
                    return res.status(201).send({ success: true, data }).end();
                })
                .catch((err) => {
                    return res.status(500).send({ success: false, err }).end();
                });
        } else {
            return res.status(400).send({ success: false, message: 'Payload doesn"t contain document info' }).end();
        }
    },
    deleteDocumet: (req, res) => {
        // TODO delete documet
    }
}