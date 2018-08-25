const uuid = require('uuid/v4');
const config = require('./../config');
const {
  getStateValues,
  createAddress
} = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client, config.namespace.hospital);

module.exports = {
  getHospital: (req, res) => {
    const {
      id
    } = req.query;
    return getStateValues(id, 'hospital', res);
  },
  updateHospital: (req, res) => {
    const Action = 'updateHospital';
    const hospitalData = req.body;
    // hospitalData.id = id;
    return sawtoothWalletClient.submit({
      Action,
      Data: hospitalData
    }, res);
  },
  addHospital: (req, res) => {
    const Action = 'addHospital';
    const hospitalData = req.body;
    // hospitalData.id = id;
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
