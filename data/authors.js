const casual = require('casual')
const addressesData = require('./addresses')

casual.define('author', addressId => ({
  id: casual.uuid,
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  age: casual.integer(20, 100),
  numBooksPublished: casual.integer(1, 4),
  addressId,
}))


const authorsData = []

for (let i = 0; i < 10; ++i) {
  const addressId = casual.random_element(addressesData).id
  authorsData.push(casual.author(addressId))
}

module.exports = authorsData
