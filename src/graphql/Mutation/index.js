const merge = require('lodash.merge')
const Auth = require('./Auth')

const resolvers = [Auth]

module.exports = merge(...resolvers)
