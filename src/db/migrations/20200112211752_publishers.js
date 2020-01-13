
exports.up = knex => knex.schema.createTable('publishers', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('company').notNullable()

  table.string('phoneNumber').unique()

  table.integer('numBooksPublished').defaultTo(0)

  table
    .uuid('addressId')
    .references('addresses.id')

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('publishers')
