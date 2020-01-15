
exports.up = knex => knex.schema.createTable('books', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('title').notNullable()

  table.string('language').notNullable()

  table.integer('numPages')

  table.date('datePublished')

  table.boolean('bestseller')

  table
    .uuid('authorId')
    .references('authors.id')
    .notNullable()

  table
    .uuid('publisherId')
    .references('publishers.id')
    .notNullable()

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('books')
