const router = require('express').Router();
const patient = require('./../services/patient');
const document = require('./../services/document');
const hospital = require('./../services/hospital');
const user = require('./../services/user');

router.get('/patient', patient.getPatient);
router.post('/patient', patient.createPatient);
router.put('/patient/:id', patient.updatePatient);
router.delete('/patient/:id', patient.deletePatient);

router.post('/document', document.addDocument);
router.delete('/document/:id', document.deleteDocument);
router.get('/document', document.getDocument);

router.post('/hospital', hospital.addHospital);
router.get('/hospital', hospital.getHospital);
router.delete('/hospital/:id', hospital.deleteHospital);

router.post('/user/login', user.login);
router.post('/user/register', user.register);
// router.post('/user/info', user.info);


module.exports = router;