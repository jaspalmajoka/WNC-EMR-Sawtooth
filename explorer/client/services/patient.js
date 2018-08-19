const config = require('./../config');
const {
  getStateValues,
  createAddress,
  getDiffProperties
} = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client, config.namespace.patient);

module.exports = {
  createPatient: (req, res) => {
    const {
      id
    } = req.body;
    const Action = 'createPatient';
    const patientData = req.body;

    if (!id) {
      return res.status(400).send({
        success: false,
        message: 'ID Field Missing in payload'
      }).end();
    } else {
      return sawtoothWalletClient.submit({
        Action,
        Data: patientData
      }, res);
    }
  },
  getPatient: (req, res) => {
    const {
      id
    } = req.query;
    return getStateValues(id, 'patient', res);
  },
  deletePatient: (req, res) => {
    const Action = 'deletePatient';
    const {
      id
    } = req.params;
    return sawtoothWalletClient.submit({
      Action,
      Data: {
        id
      }
    }, res);
  },
  updatePatient: (req, res) => {
    // Can be used for the other patient related updates
    const Action = 'updatePatient';
    const {
      id
    } = req.params;
    const payload = req.body;
    payload.id = id;
    return sawtoothWalletClient.submit({
      Action,
      Data: payload
    }, res);
  }
}
