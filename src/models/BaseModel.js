const { snakeCaseMappers, Model } = require('objection')
const knex = require('../lib/knex')

Model.knex(knex)

class BaseModel extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers()
  }

  // Keeps updated_at column up-to-date
  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }

  // Insert default updated_at and created_at when a new row is created
  $beforeInsert() {
    const d = new Date().toISOString()
    this.updated_at = d
    this.created_at = d
  }
}

module.exports = BaseModel
