'use strict'

const fs = require('fs')
const path = require('path')

const loadConfig = (defaultValue = {}) => {
    try {
        return require('./config.json')
    } catch (err) {
        // Throw error on bad JSON, otherwise ignore
        if (err instanceof SyntaxError) throw err
        return {}
    }
}

const config = loadConfig()

const initConfigValue = (key, defaultValue = null) => {
    config[key] = process.env[key] || config[key] || defaultValue
}

// Setup sensitive variable, warning user if using defaults
initConfigValue('JWT_SECRET')
initConfigValue('PRIVATE_KEY')

if (!config.PRIVATE_KEY) {
    config.PRIVATE_KEY = Array(64).fill('1').join('')
    console.warn(
        'WARNING! No signing key provided. Batch signing will be insecure!')
    console.warn(
        'Set "PRIVATE_KEY" as an environment variable or in "config.json" file.')
}

if (!config.JWT_SECRET) {
    config.JWT_SECRET = 'supply-chain-secret'
    console.warn(
        'WARNING! No secret provided. JWT authorization tokens will be insecure!')
    console.warn(
        'Set "JWT_SECRET" as an environment variable or in "config.json" file.')
}

// Config method to set a new value, then write it to config.json
config.set = (key, value) => {
    config[key] = value

    const diskConfig = loadConfig()
    diskConfig[key] = value

    const configPath = path.resolve(__dirname, '../config.json')
    const jsonConfig = JSON.stringify(diskConfig, null, 2)
    fs.writeFile(configPath, jsonConfig, 'utf8', err => {
        if (err) console.error(err)
    })
}

module.exports = config