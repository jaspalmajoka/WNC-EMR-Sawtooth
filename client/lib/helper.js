const { createHash } = require('crypto');

module.exports = {
    leafHash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    hash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
}