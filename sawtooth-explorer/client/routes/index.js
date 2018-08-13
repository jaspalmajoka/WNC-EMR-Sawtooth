const router = require('express').Router();
const patient = require('./../services/patient');
const document = require('./../services/document');

router.get('/patient', patient.getPatient);
router.post('/patient', patient.createPatient);
router.put('/patient/:id', patient.updatePatient);
router.delete('/patient/:id', patient.deletePatient);

router.put('/patient/:patientId/document', document.addDocument);
router.delete('/patient/:patientId/document', document.deleteDocument);



module.exports = router;