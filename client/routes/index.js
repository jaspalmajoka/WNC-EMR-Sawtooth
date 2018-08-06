const router = require('express').Router();
const patient = require('./../services/patient');

router.get('/patient', patient.getPatient);

router.post('/patient', patient.createPatient);

module.exports = router;