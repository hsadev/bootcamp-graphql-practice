
exports.up = knex => knex.schema.createTable('authors', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('firstName').notNullable()

  table.string('lastName').notNullable()

  table.integer('age')

  table.string('email').unique()

  table.integer('numBooksPublished').defaultTo(0)

  table
    .uuid('addressId')
    .references('addresses.id')

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('authors')
