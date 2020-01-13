const casual = require('casual')
const authorsData = require('./authors')
const publishersData = require('./publishers')

casual.define('book', ({ authorId, publisherId }) => ({
  id: casual.uuid,
  title: casual.title,
  language: casual.language_code,
  numPages: casual.integer(200, 600),
  datePublished: casual.date(),
  bestseller: casual.boolean,
  authorId,
  publisherId,

}))
const books = []

for (let i = 0; i < 30; ++i) {
  const authorId = casual.random_element(authorsData).id
  const publisherId = casual.random_element(publishersData).id
  books.push(casual.book({ authorId, publisherId }))
}

module.exports = books
