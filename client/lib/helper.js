const { createHash } = require('crypto');
const fetch = require('node-fetch');
const fs = require('fs');
const config = require('./../config');
const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

module.exports = {
    leafHash,
    hash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
    getUserPriKey: (userid, path) => {
        var userprivkeyfile = `${path}${userid}.priv`;
        return fs.readFileSync(userprivkeyfile);
    },
    getUserPubKey: (userid) => {
        var userpubkeyfile = `${path}${userid}.pub`;
        return fs.readFileSync(userpubkeyfile);
    },
    getState: (address) => {
        return fetch(`${config.restapi}/state?address=${address}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => data.data.map(obj => {
                try {
                    obj.data = JSON.parse(Buffer.from(obj.data, 'base64').toString());
                } catch (error) {
                    console.log(`Parse Error - ${obj.data}`);
                }
                return obj;
            }));
    },
    createAddress: (name, usernamespace = '00') => `${config.family.namespace}${usernamespace}${name.length ? leafHash(name, 64 - usernamespace.length) : ''}`,

}