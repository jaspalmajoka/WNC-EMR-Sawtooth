const uuid = require('uuid/v4');
const config = require('./../config');
const {
  getStateValues,
  createAddress
} = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
  getHospital: (req, res) => {
    const {
      id
    } = req.query;
    return getStateValues(id, 'hospital', res);
  },
  addHospital: (req, res) => {
    const id = uuid();
    const Action = 'addHospital';
    const hospitalData = req.body;
    hospitalData.id = id;
    hospitalData.timestamp = new Date().toUTCString();
    return sawtoothWalletClient.submit({
      Action,
      Data: hospitalData
    }, res);
  },
  deleteHospital: (req, res) => {
    const Action = 'deleteHospital';
    const {
      id
    } = req.params;
    return sawtoothWalletClient.submit({
      Action,
      Data: {
        id
      }
    }, res);
  }
}
