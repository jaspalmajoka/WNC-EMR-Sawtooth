const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const config = require('./../system/config');

const BlockSchema = require('./schema/block');
BlockSchema.plugin(mongoosePaginate);

const Block = mongoose.model('blocks', BlockSchema);

const DB_HOST = config.DB_HOST;
const DB_PORT = config.DB_PORT;
const DB_NAME = config.DB_NAME;

const connect = _ => {
    return mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
        useNewUrlParser: true
    }).then(() => {
        // Empty Table when node restarts 
        return Block.collection.drop()
    }).catch(err => {
        console.error(err.message);
    });
}

const insert = block => {
    block.entryId = `${block.address}${block.blockNum}`
    block.batches = block.batches
        .map(batch => {
            batch.transactions = batch.transactions.map(transaction => {
                transaction.payload = JSON.parse(Buffer.from(transaction.payload, 'base64').toString());
                block.timestamp = transaction.payload.timestamp;
                return transaction;
            });
            return batch;
        });
    return Block.insertMany([block]);
}

const deleteInvalid = () => {
    return Block.deleteMany({
        entryId: {
            $exists: false
        }
    }).exec();
}

const list = (query = {}, options = {
    page: 1,
    limit: 10
}) => {
    return Block.paginate();
}

module.exports = {
    connect,
    insert,
    list,
    deleteInvalid
}