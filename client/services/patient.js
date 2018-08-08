const config = require('./../config');
const { getState, createAddress } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
    createPatient: (req, res) => {
        const { id } = req.body;
        const Action = 'createPatient';
        if (!id) {
            return res.status(400).send({ success: false, message: 'ID Field Missing in payload' }).end();
        }
        else {
            return sawtoothWalletClient.submit({ Action, Data: req.body })
                .then((data) => {
                    return res.status(201).send({ success: true, data }).end();
                })
                .catch((err) => {
                    return res.status(500).send({ success: false, err }).end();
                });
        }
    },
    getPatient: (req, res) => {
        const { id } = req.query;
        getState(`${createAddress(id, config.namespace.patient)}`).then((data) => {
            res.json({ success: true, data, message: 'Data retreived' });
        }).catch((err) => {
            res.status(500).send(err).end();
        })
    }
}