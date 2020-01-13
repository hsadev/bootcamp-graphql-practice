const publishersData = require('../../../data/publishers')


exports.seed = knex => knex('publishers').del()
  .then(() => knex('publishers').insert(publishersData))
