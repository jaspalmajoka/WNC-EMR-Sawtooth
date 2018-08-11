const router = require('express').Router();
const patient = require('./../services/patient');

router.get('/patient', patient.getPatient);

router.post('/patient', patient.createPatient);

router.put('/patient/:id', patient.updatePatient);

router.delete('/patient/:id', patient.deletePatient);

module.exports = router;