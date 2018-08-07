const { TransactionProcessor } = require('sawtooth-sdk/processor');
const config = require('./config');
const { OpenEmr } = require('./handler');

// Register Transaction Processor 
const transactionProcessor = new TransactionProcessor(config.validator_url);
// Add Transaction Handlers
transactionProcessor.addHandler(new OpenEmr());
// Start Transaction Processor with added Family Handlers
transactionProcessor.start();

// When Process stops
process.on('SIGUSR2', () => {
    //Unregister the Transaction Processor
    transactionProcessor._handleShutdown();
})