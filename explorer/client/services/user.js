const config = require('./../config');
const { getState, createAddress, getDiffProperties } = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
    register: (req, res) => {
        const { id } = req.body;
        const Action = 'userRegister';
        const Data = req.body;
        
        if (!id) {
            return res.status(400).send({ success: false, message: 'ID Field Missing in payload' }).end();
        }
        else {
            return sawtoothWalletClient.submit({ Action, Data }, res);
        }
    },
    login: (req, res) => {
        const { id } = req.params;
        const Action = 'userLogin';
        const Data = req.params;

        if (!id) {
            return res.status(400).send({ success: false, message: 'ID Field Missing in payload' }).end();
        }
        else {
            return sawtoothWalletClient.submit({ Action, Data }, res);
        }
    },
    update: (req, res) => {
        const { id } = req.params;
        const Action = 'userUpdate';
        const Data = req.body;
        Data.id = id;

        if (!id) {
            return res.status(400).send({ success: false, message: 'ID Field Missing in payload' }).end();
        }
        else {
            return sawtoothWalletClient.submit({ Action, Data }, res);
        }
    }
}