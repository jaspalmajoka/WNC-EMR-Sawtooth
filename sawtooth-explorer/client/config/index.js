const { createHash } = require('crypto');

const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);
const configData = {
    app: {
        port: "3000",
        ip: "0.0.0.0"
    },
    family: {
        name: "openemr",
        version: "1.6"
    },
    keyslocation: "/root/.sawtooth/keys/",
    loglevel: "dev",
    restapi: process.env.REST_API || "http://localhost:8008",
    client: "openemr",
    namespace: {
        patient: '10',
        document: '11',
        hospital: '20',
    }
};

configData.family.namespace = leafHash(configData.family.name, 6);

module.exports = configData;