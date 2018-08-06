const config = require('config');
const morgan = require('morgan');
const parser = require('body-parser');

const app = require('express')();


app.use(morgan(config.get('loglevel')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.json({ success: true, message: 'GOOD !' }).end();
});

app.post('/submit', (req, res) => {
    res.end();
});


app.listen(config.get('app.port'), config.get('app.ip'), () => {
    console.debug(`Server started at http://${config.get('app.ip')}:${config.get('app.port')}/health`);
});