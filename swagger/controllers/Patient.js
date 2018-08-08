'use strict';

var utils = require('../utils/writer.js');
var Patient = require('../service/PatientService');

module.exports.patientPOST = function patientPOST (req, res, next) {
  var inventoryItem = req.swagger.params['inventoryItem'].value;
  Patient.patientPOST(inventoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
