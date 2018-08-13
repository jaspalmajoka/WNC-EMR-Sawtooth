const router = require('express').Router();
const patient = require('./../services/patient');
const document = require('./../services/document');

router.get('/patient', patient.getPatient);
router.post('/patient', patient.createPatient);
router.put('/patient/:id', patient.updatePatient);
router.delete('/patient/:id', patient.deletePatient);

router.put('/patient/:id/document', document.addDocument);
router.delete('/patient/:patientId/:id', document.deleteDocument);



module.exports = router;