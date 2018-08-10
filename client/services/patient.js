const config = require('./../config');
const { getState, createAddress } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

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
        _getPatients(id, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.json({ success: true, data });
        })
    },
    deletePatient: (req, res) => {
        // TODO Delete Patient Data
        res.end();
    },
    updatePatient: (req, res) => {
        // TODO Update patient data
        // Can be used for the other patient related updates
        res.end();
    }
}