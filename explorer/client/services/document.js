const uuid = require('uuid/v4');
const config = require('./../config');
const {
  getStateValues,
  createAddress,
  getDiffProperties
} = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client);

module.exports = {
  getDocument: (req, res) => {
    const {
      id
    } = req.query;
    return getStateValues(id, 'document', res);
  },
  addDocument: (req, res) => {
    const id = uuid();
    const Action = 'addDocument';
    const documentData = req.body;
    documentData.id = id;
    if (!documentData.patientId) {
      return res.status(400).send({
        success: false,
        err: 'Field patientId is missing.'
      }).end();
    }
    return sawtoothWalletClient.submit({
      Action,
      Data: documentData
    }, res);
  },
  deleteDocument: (req, res) => {
    const Action = 'deleteDocument';
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
