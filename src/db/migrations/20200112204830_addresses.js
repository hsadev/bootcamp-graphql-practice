
exports.up = knex => knex.schema.createTable('addresses', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('street').notNullable()

  table.string('city').notNullable()

  table.string('state').notNullable()

  table.string('zip').notNullable()

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('addresses')
