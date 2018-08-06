const config = require('./../config');

const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
    createPatient: (req, res) => {
        sawtoothWalletClient.submit(req)
            .then((data) => {
                res.json({ success: true, data }).end();
            })
            .catch((err) => {
                res.status(400).json({ success: true, err }).end();
            });
    },
    getPatient: (req, res) => {
        res.json({ success: true, message: 'TODO Get Patient' })
    }
}