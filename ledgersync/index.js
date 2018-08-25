'use strict'

const db = require('./db')
const subscriber = require('./subscriber')
const server = require('./server');
// const protos = require('./subscriber/protos')

Promise.all([
        db.connect(),
        // protos.compile()
    ])
    .then(subscriber.start)
    .then(server.start)
    .catch(err => console.error(err.message))