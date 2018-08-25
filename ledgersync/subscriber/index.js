'use strict'

const _ = require('lodash')
const request = require('request');
const {
    Stream
} = require('sawtooth-sdk/messaging/stream');
const {
    Message,
    EventList,
    EventSubscription,
    EventFilter,
    StateChangeList,
    ClientEventsSubscribeRequest,
    ClientEventsSubscribeResponse
} = require('sawtooth-sdk/protobuf');

const config = require('../system/config');
const db = require('./../db');

const PREFIX = 'bf0f0b';
const NULL_BLOCK_ID = '0000000000000000'
const VALIDATOR_URL = config.VALIDATOR_URL;
const NAMESPACE = config.NAMESPACE;
const RESTAPI_URL = config.RESTAPI_URL;
const stream = new Stream(VALIDATOR_URL)


const getBlockInfo = blockId => {
    return new Promise((resolve, reject) => {
        request({
            uri: `${RESTAPI_URL}/blocks/${blockId}`,
            method: 'GET',
        }, (err, response, result) => {
            if (err) return reject(err);
            resolve(JSON.parse(result));
        });
    });
}

// Parse Block Commit Event
const getBlock = events => {
    const block = _.chain(events)
        .find(e => e.eventType === 'sawtooth/block-commit')
        .get('attributes')
        .map(a => [a.key, a.value])
        .fromPairs()
        .value()

    return {
        blockNum: parseInt(block.block_num),
        blockId: block.block_id,
        stateRootHash: block.state_root_hash
    }
}

// Parse State Delta Event
const getChanges = events => {
    const event = events.find(e => e.eventType === 'sawtooth/state-delta')
    if (!event) return []

    const changeList = StateChangeList.decode(event.data)
    return changeList.stateChanges
        .filter(change => change.address.slice(0, 6) === PREFIX)
        .map(a => {
            return {
                address: a.address,
                value: JSON.parse(Buffer.from(a.value, 'base64').toString())
            }
        });
}

// Handle event message received by stream
const handleEvent = msg => {
    if (msg.messageType === Message.MessageType.CLIENT_EVENTS) {
        const events = EventList.decode(msg.content).events
        const blockChanges = getBlock(events);
        const stateChanges = getChanges(events);
        // TODO Attach batch info to Transaction
        const promises = stateChanges.map(state => {
            const {
                address,
                value,
                value: {
                    id,
                    timestamp
                }
            } = state;
            const obj = {
                address,
                id,
                timestamp,
                value
            };
            return getBlockInfo(blockChanges.blockId)
                .then((response) => {
                    const {
                        data,
                        data: {
                            batches,
                            header,
                            header: {
                                block_ids,
                                block_num,
                                consensus,
                                previous_block_id,
                                signer_public_key,
                                state_root_hash
                            }
                        }
                    } = response;
                    Object.assign(obj, blockChanges);
                    Object.assign(obj, {
                        batches,
                        addressType: NAMESPACE[obj.address.slice(6, 8)] || `${obj.address.slice(6, 8)} - Namespace Mapping Not Available`
                    })
                    return db.insert(obj);
                });
        });
        Promise.all(promises).catch(console.error);
    } else {
        console.warn('Received message of unknown type:', msg.messageType)
    }
}

// Send delta event subscription request to validator
const subscribe = () => {
    const blockSub = EventSubscription.create({
        eventType: 'sawtooth/block-commit'
    })
    const deltaSub = EventSubscription.create({
        eventType: 'sawtooth/state-delta',
        filters: [EventFilter.create({
            key: 'address',
            matchString: `^${PREFIX}.*`,
            filterType: EventFilter.FilterType.REGEX_ANY
        })]
    })

    return stream.send(
            Message.MessageType.CLIENT_EVENTS_SUBSCRIBE_REQUEST,
            ClientEventsSubscribeRequest.encode({
                lastKnownBlockIds: [NULL_BLOCK_ID],
                subscriptions: [blockSub, deltaSub]
            }).finish()
        )
        .then(response => ClientEventsSubscribeResponse.decode(response))
        .then(decoded => {
            const status = _.findKey(ClientEventsSubscribeResponse.Status,
                val => val === decoded.status)
            if (status !== 'OK') {
                throw new Error(`Validator responded with status "${status}"`)
            }
        })
}

// Start stream and send delta event subscription request
const start = () => {
    setInterval(async _ => {
        await db.deleteInvalid();
    }, 3000)
    return new Promise(resolve => {
        stream.connect(() => {
            stream.onReceive(handleEvent)
            subscribe().then(resolve)
        })
    })
}

module.exports = {
    start
}