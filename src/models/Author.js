const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Author extends BaseModel {
  static get tableName() {
    return 'authors'
  }

  static get relationMappings() {
    const Address = require('./Address')

    return {
      address: {
        relation: BelongsToOneRelation,
        modelClass: Address,
        join: {
          from: 'authors.addressId',
          to: 'addresses.id',
        },
      },
    }
  }
}

module.exports = Author
