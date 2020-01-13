const casual = require('casual')

casual.define('myAddress', () => ({
  id: casual.uuid,
  street: casual.street,
  city: casual.city,
  state: casual.state,
  zip: casual.zip(5),
}))

const addresses = []

for (let i = 0; i < 20; ++i) {
  addresses.push(casual.myAddress)
}

module.exports = addresses
