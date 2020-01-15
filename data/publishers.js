const casual = require('casual')
const addressesData = require('./addresses')

casual.define('publisher', addressId => ({
  id: casual.uuid,
  company: casual.company_name,
  phoneNumber: casual.phone,
  numBooksPublished: casual.integer(10, 100),
  addressId,
}))


const publishers = []

for (let i = 0; i < 10; ++i) {
  const addressId = casual.random_element(addressesData).id
  publishers.push(casual.publisher(addressId))
}

module.exports = publishers
