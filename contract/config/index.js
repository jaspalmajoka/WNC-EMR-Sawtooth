const { createHash } = require('crypto');
const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

const configData = {
    family: {
        name: "openemr",
        version: "1.1"
    },
    validator_url: process.env.VALIDATOR_URL || "tcp://127.0.0.1:4004",
    namespace: {
        patient: '10',
        document: '11',
        admin: '11',
    }
};

configData.family.namespace = leafHash(configData.family.name, 6);
configData.family.versions = [configData.family.version];
configData.family.namespaces = [configData.family.namespace];

module.exports = configData; 