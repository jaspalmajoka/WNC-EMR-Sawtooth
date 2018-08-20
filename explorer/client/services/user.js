const config = require('./../config');
const {
  getStateValues,
  createAddress,
  getDiffProperties
} = require('./../lib/helper');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client, config.namespace.user);

module.exports = {
  getUser: (req, res) => {
    const {
      id
    } = req.query;
    return getStateValues(id, 'user', res);
  },
  register: (req, res) => {
    const {
      id
    } = req.body;
    const {
      type
    } = req.params;
    const Action = 'userRegister';
    const Data = req.body;
    Data.type = type;
    if (!config.user_types.includes(type)) {
      return res.status(400).send({
        success: false,
        message: `type ${type} is not valid. Valid Keys are ${JSON.stringify(config.user_types)}`
      }).end();
    } else if (!id) {
      return res.status(400).send({
        success: false,
        message: 'ID Field Missing in payload'
      }).end();
    } else {
      return sawtoothWalletClient.submit({
        Action,
        Data
      }, res);
    }
  },
  login: (req, res) => {
    const {
      id
    } = req.params;
    const Action = 'userLogin';
    const Data = req.params;

    if (!id) {
      return res.status(400).send({
        success: false,
        message: 'ID Field Missing in payload'
      }).end();
    } else {
      return sawtoothWalletClient.submit({
        Action,
        Data
      }, res);
    }
  },
  update: (req, res) => {
    const {
      id
    } = req.params;
    const {
      changes
    } = req.body;
    const Action = 'userUpdate';
    const Data = req.body;
    Data.id = id;

    if (!id) {
      return res.status(400).send({
        success: false,
        message: 'id field Missing in payload'
      }).end();
    } else if (!changes || changes.length === 0) {
      return res.status(400).send({
        success: false,
        message: 'changes field Missing in payload'
      }).end();
    } else {
      return sawtoothWalletClient.submit({
        Action,
        Data
      }, res);
    }
  }
}
