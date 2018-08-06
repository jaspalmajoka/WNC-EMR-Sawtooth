// Require module's required for app
const config = require('./config');
const morgan = require('morgan');
const parser = require('body-parser');

// Required internal module's
const sawtooth = require('./routes');

// Create app instance
const app = require('express')();

// Middlewares for logging 
// API Requests
app.use(morgan(config.loglevel));
// Modifiying the form data and create req.body
app.use(parser.json());
// Modifying the form data and extend the combined 
// property into child attribute
app.use(parser.urlencoded({ extended: true }));

// Health checkup endpoint
app.get('/health', (req, res) => {
    res.json({ success: true, message: 'GOOD !' }).end();
});

// Sawtooth API endpoints
app.use('/transaction', sawtooth);

// Validates data and used for submitting payload 
// for the sawtooth transaction processor
app.post('/submit', (req, res) => {
    res.end();
});

// Starts code execution and creates a server instance
app.listen(config.app.port, config.app.ip, () => {
    console.debug(`Server started at http://${config.app.ip}:${config.app.port}/health`);
});