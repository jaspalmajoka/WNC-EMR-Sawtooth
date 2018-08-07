const config = require('./../config');

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
        res.json({ success: true, message: 'TODO Get Patient' })
    }
}