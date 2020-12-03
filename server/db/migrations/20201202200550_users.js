
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.string('username')
    table.binary('hash')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}