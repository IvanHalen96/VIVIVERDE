exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id').primary(); // Auto-incrementing primary key
    table.string('email', 255);
    table.string('password', 255);
    table.string('hash_key', 255);
    table.string('score', 255);
    table.string('rol', 255);
    table.integer('active');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
