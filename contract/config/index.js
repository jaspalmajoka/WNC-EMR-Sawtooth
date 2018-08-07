const config = require('config');
const { leafHash } = require('./../lib/helper');

const configData = config.util.toObject();

configData.family.namespace = leafHash(config.family.name, 6);

module.exports = configData; 