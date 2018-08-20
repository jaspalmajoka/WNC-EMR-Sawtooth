const {
    createHash
} = require('crypto');

const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

const FAMILY_NAME = process.env.FAMILY_NAME || 'openemr';
const VERSION = process.env.VERSION || '2.1';

const obj = {
    app: {
        port: process.env.PORT || "3000",
        ip: "0.0.0.0"
    },
    family: {
        name: FAMILY_NAME,
        version: VERSION,
        namespace: leafHash(FAMILY_NAME, 6),
    },
    validator_url: process.env.VALIDATOR_URL || "tcp://127.0.0.1:4004",
    keyslocation: process.env.KEY_LOCATION || "keys",
    loglevel: "dev",
    restapi: process.env.REST_API || "http://localhost:8008",
    client: process.env.FAMILY_NAME || FAMILY_NAME,
    namespace: {
        patient: '10',
        document: '11',
        hospital: '20',
        user: '30',
    }
}


module.exports = configData;