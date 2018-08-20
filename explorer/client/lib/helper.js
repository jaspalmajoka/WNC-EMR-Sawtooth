const {
  createHash
} = require('crypto');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
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

const createAddress = (name, usernamespace = '00') => `${config.family.namespace}${usernamespace}${name.length ? leafHash(name, 64 - usernamespace.length) : ''}`;

module.exports = {
  leafHash,
  removeEmpty: (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
      else if (obj[key] == null) delete obj[key];
    });
  },
  hash: (input, length) => createHash('sha512').update(input).digest('hex').toLowerCase().slice(0, length),
  getUserPriKey: (userid, pathDir) => {
    var userprivkeyfile = path.join(pathDir, `${userid}.priv`);
    return fs.readFileSync(userprivkeyfile);
  },
  getUserPubKey: (userid, path) => {
    var userpubkeyfile = path.join(pathDir, `${userid}.pub`);
    return fs.readFileSync(userpubkeyfile);
  },
  getState,
  /**
   * Creates address with supplied id
   * and makes an API call to RestAPI with the address to 
   * reteive the data of patient from state
   * 
   * @param {*id} id 
   * @param {*Error,DataArray} callback 
   */
  getStateValues: (id, type, res) => {
    let address;
    if (id) {
      address = `${createAddress(id, config.namespace[type])}`
    } else {
      address = `${createAddress('', config.namespace[type])}`
    }
    getState(address)
      .then((data) => {
        data.address = address;
        return res.json({
          success: true,
          data
        });
      }).catch((err) => {
        if (err) return res.status(500).send(err);
      })
  },
  createAddress,
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
