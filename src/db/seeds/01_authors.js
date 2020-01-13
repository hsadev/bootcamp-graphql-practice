const authorsData = require('../../../data/authors')


exports.seed = knex => knex('authors').del()
  .then(() => knex('authors').insert(authorsData))
