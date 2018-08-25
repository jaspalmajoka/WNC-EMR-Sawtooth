const Schema = require('mongoose').Schema;

const BlockSchema = new Schema({
    address: String,
    addressType: String,
    blockId: String,
    blockNum: Number,
    id: String,
    entryId: {
        type: String,
        unique: true
    },
    stateRootHash: String,
    timestamp: Date,
    value: Object,
    batches: [
        new Schema({
            header: String,
            header_signature: String,
            trace: Boolean,
            header: new Schema({
                signer_public_key: String,
                transaction_ids: [String],
            }),
            transactions: [
                new Schema({
                    header_signature: String,
                    payload: Object,
                    header: new Schema({
                        batcher_public_key: String,
                        dependencies: [String],
                        family_name: String,
                        family_version: String,
                        inputs: [String],
                        nonce: String,
                        outputs: [String],
                        payload_sha512: String,
                        signer_public_key: String,
                    }),
                })
            ],
        })
    ],
}, {
    _id: false,
    strict: false,
});

module.exports = BlockSchema;