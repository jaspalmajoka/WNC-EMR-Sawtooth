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
        const Action = 'deletePatient';
        const { id } = req.params;
        _getPatients(id, (err, data) => {
            if (err) return res.status(500).send(err);
            return sawtoothWalletClient.submit({ Action, Data: { id } })
                .then((data) => {
                    return res.status(200).send({ success: true, data }).end();
                })
                .catch((err) => {
                    return res.status(500).send({ success: false, err }).end();
                });
        })
    },
    updatePatient: (req, res) => {
        // Can be used for the other patient related updates
        const Action = 'updatePatient';
        const { id } = req.params;
        const payload = req.body;
        _getPatients(id, (err, data) => {
            if (err) return res.status(500).send(err);
            const _patient = data[0].data;
            // Replace ID from params so we don't update wrong one in body
            payload.id = id;
            const changesMade = getDiffProperties(_patient, payload);
            Object.assign(_patient, payload);
            if (!_patient.changeHistory) {
                _patient.changeHistory = [];
            }
            // Compared changes will be pushed and tracked on relavant patient data change history
            _patient.changeHistory.push(changesMade);
            // Once the updated values are copied to original data we submit it for blockchain
            return sawtoothWalletClient.submit({ Action, Data: _patient })
                .then((data) => {
                    return res.status(200).send({ success: true, data }).end();
                })
                .catch((err) => {
                    return res.status(500).send({ success: false, err }).end();
                });
        })
    }
}