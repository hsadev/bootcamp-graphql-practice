const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Publisher extends BaseModel {
  static get tableName() {
    return 'publishers'
  }

  static get relationMappings() {
    const Address = require('./Address')

    return {
      address: {
        relation: BelongsToOneRelation,
        modelClass: Address,
        join: {
          from: 'publishers.addressId',
          to: 'addresses.id',
        },
      },
    }
  }
}

module.exports = Publisher
