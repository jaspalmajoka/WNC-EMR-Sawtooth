const router = require('express').Router();
const patient = require('./../services/patient');
const document = require('./../services/document');
const hospital = require('./../services/hospital');

router.get('/patient', patient.getPatient);
router.post('/patient', patient.createPatient);
router.put('/patient/:id', patient.updatePatient);
router.delete('/patient/:id', patient.deletePatient);

router.post('/document', document.addDocument);
router.delete('/document/:id', document.deleteDocument);
router.get('/document', document.getDocument);

router.post('/hospital', hospital.addHospital);
router.get('/hospital', hospital.getHospital);


module.exports = router;