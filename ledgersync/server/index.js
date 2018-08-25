const express = require('express');
const cors = require('cors');
const parser = require('body-parser')
const db = require('./../db');

const config = require('./../system/config');
const PORT = config.PORT;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use(cors());

app.post('/submit', (req, res) => {
    res.end();
});

app.get('/config', (req, res) => {
    res.json(config).end();
});

app.get('/data', (req, res) => {
    db
        .list({}, req.query)
        .then(data => {
            res.json(data).end();
        });
});

const start = _ => {
    return new Promise(resolve => {
        return app.listen(PORT, '0.0.0.0', resolve);
    })
}

module.exports = {
    start
}