const addressesData = require('../../../data/addresses')


exports.seed = knex => knex('addresses').del()
  .then(() => knex('addresses').insert(addressesData))
