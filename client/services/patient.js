const config = require('./../config');

const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
    createPatient: (req, res) => {
        const payload = req.body;
        const { Action, Data } = payload;
        if (Action && Data) {
            sawtoothWalletClient.submit(payload)
                .then((data) => {
                    res.json({ success: true, data }).end();
                })
                .catch((err) => {
                    res.status(400).json({ success: true, err }).end();
                });
        } else {
            res.status(400).json({ success: true, nessage: 'Payload Error' }).end();
        }
    },
    getPatient: (req, res) => {
        res.json({ success: true, message: 'TODO Get Patient' })
    }
}