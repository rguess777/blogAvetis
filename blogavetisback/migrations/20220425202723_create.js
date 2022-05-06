export const up = async (knex) => {
  await knex.schema.createTable('roles', (table) => {
    table.increments('id').notNullable().unique()
    table.text('label').notNullable()
  })

  await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.text('email').notNullable().unique()
    table.text('passwordHash').notNullable()
    table.text('passwordSalt').notNullable()
    table.integer('roleId').notNullable()
    table.foreign('roleId').references('id').inTable('roles').onDelete('SET NULL')
  })

  await knex.schema.createTable('posts', (table) => {
    table.increments('id')
    table.text('title').notNullable()
    table.text('content').notNullable()
    table.integer('userId').notNullable()
    table.foreign('userId').references('id').inTable('users')
    table.datetime('createdAt').notNullable().defaultTo(knex.fn.now())
  })
  await knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.text('content').notNullable()
    table.integer('userId').notNullable()
    table.integer('postId').notNullable()
    table.foreign('userId').references('id').inTable('users')
    table.foreign('postId').references('id').inTable('posts')
    table.datetime('createdAt').defaultTo(knex.fn.now())
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable('roles')
  await knex.schema.dropTable('comments')
  await knex.schema.dropTable('posts')
  await knex.schema.dropTable('users')
}
