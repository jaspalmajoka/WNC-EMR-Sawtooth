const config = require('./../config');
const client = config.client;

const SawtoothWalletClient = require('./../lib/SawtoothWalletClient');
const sawtoothWalletClient = new SawtoothWalletClient(client, config.namespace.appointment);


module.exports = {
  createAppointment: (req, res) => {
    const Action = 'createAppointment';
    const appointmentData = req.body;
    if (
      typeof appointmentData.appointment === 'object' &&
      appointmentData.appointment.id &&
      typeof appointmentData.patient === 'object' &&
      appointmentData.appointment.id &&
      typeof appointmentData.provider === 'object' &&
      appointmentData.appointment.id
    ) {
      return sawtoothWalletClient.submit({
        Action,
        Data: appointmentData
      }, res);
    } else {
      return res.status(400).send({
        success: false,
        message: 'id field Missing in payload for objects'
      }).end();
    }
  }
}
