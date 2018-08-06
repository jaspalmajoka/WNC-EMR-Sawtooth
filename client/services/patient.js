const config = require('./../config');

const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

const _createPatient = (payload) => {

}

const _getPatient = (payload) => {

}

module.exports = {
    createPatient: (req, res) => {
        res.json({ success: true, message: 'TODO Create Patient' })
    },
    getPatient: (req, res) => {
        res.json({ success: true, message: 'TODO Get Patien' })
    }
}