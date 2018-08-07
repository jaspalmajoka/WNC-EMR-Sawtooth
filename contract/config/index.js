const { createHash } = require('crypto');
const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

const configData = {
    family: {
        name: "openemr",
        version: "1.0"
    },
    validator_url: process.env.VALIDATOR_URL || "tcp://rest-api:4004"
};

configData.family.namespace = leafHash(configData.family.name, 6);
configData.family.versions = [configData.family.version];
configData.family.namespaces = [configData.family.namespace];

module.exports = configData; 