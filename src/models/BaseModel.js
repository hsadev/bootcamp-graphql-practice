const { snakeCaseMappers, Model } = require('objection')
const knex = require('../lib/knex')

Model.knex(knex)

class BaseModel extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers()
  }
}

module.exports = BaseModel
