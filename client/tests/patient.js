// Update the environment to be test while running test cases
process.env.NODE_ENV = 'test';

// Require Dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const uuid = require('uuid/v5');
const faker = require('faker');
const should = chai.should();

// Require API Server instance
const server = require('./../index');

chai.use(chaiHttp);


let patientRecord;

describe('Patient', () => {
    before(() => {
        patientRecord = {
            id: uuid(),
            name: faker.name,
            address: faker.address
        };
    });
    describe('/POST Create a patient entry into blockchain and Try to retrieve the data from Blockchain state', () => {
        it('should create an entry for the user', () => {

            chai.request(server)
                .post('/api/patient')
                .send(patientRecord)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.should.have.property('data');
                    res.should.have.property('success');
                });
        });

        it('should retreive the created entry from blockchain state', () => {
            chai.request(server)
                .get(`/api/patient?${patientRecord.id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.body.data.should.be.a('array');
                    res.body.data[0].should.be.a('object');
                });
        });
    })
})