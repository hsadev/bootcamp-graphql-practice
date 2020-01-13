const merge = require('lodash.merge')
const Welcome = require('./Welcome')

const resolvers = [Welcome]

module.exports = merge(...resolvers)
