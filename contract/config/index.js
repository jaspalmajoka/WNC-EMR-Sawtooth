const config = require('config');
const { leafHash } = require('./../lib/helper');

const configData = config.util.toObject();

configData.validator_url = process.env.VALIDATOR_URL || config.validator_url,
configData.family.namespace = leafHash(config.family.name, 6);
configData.family.versions = [configData.family.version];
configData.family.namespaces = [configData.family.namespace];

module.exports = configData; 