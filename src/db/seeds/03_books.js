const booksData = require('../../../data/books')


exports.seed = knex => knex('books').del()
  .then(() => knex('books').insert(booksData))
