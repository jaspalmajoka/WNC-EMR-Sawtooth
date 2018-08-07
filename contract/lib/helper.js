const { createHash } = require('crypto');
const fs = require('fs');

module.exports = {
    leafHash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    hash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length)
}