const { createHash } = require('crypto');

const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);
const configData = {
    app: {
        port: "3000",
        ip: "0.0.0.0"
    },
    family: {
        name: "openemr",
        version: "1.0"
    },
    keyslocation: "/root/.sawtooth/keys/",
    loglevel: "dev",
    restapi: process.env.REST_API || "http://127.0.0.1:8008",
    client: "openemr",
    namespace: {
        patient: '10',
        admin: '11',
    }
};

configData.family.namespace = leafHash(configData.family.name, 6);

module.exports = configData;