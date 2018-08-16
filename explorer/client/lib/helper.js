const {
  createHash
} = require('crypto');
const fetch = require('node-fetch');
const fs = require('fs');
const config = require('./../config');
const leafHash = (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length);

const getState = (address) => {
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
};

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
  getState,
  /**
   * Creates patient address with supplied patient id
   * and makes an API call to RestAPI with the address to 
   * reteive the data of patient from state
   * 
   * @param {*id} id 
   * @param {*Error,DataArray} callback 
   */
  getStateValues: (id, callback) => {
    let address;
    if (id) {
      address = `${createAddress(id, config.namespace.user)}`
    } else {
      address = `${createAddress('', config.namespace.user)}`
    }
    getState(address)
      .then((data) => callback(null, data)).catch((err) => callback(err))
  },
  createAddress: (name, usernamespace = '00') => `${config.family.namespace}${usernamespace}${name.length ? leafHash(name, 64 - usernamespace.length) : ''}`,
  getDiffProperties: (object1, object2) => {
    const difference = [];

    for (key in object1) {
      if (object1[key] != object2[key]) {
        difference.push(key)
      }
    }

    for (key in object2) {
      if (object1[key] != object2[key]) {
        difference.push(key)
      }
    }

    return difference
  }

}
