exports.up = function (knex) {
    return knex.schema.createTable('map', function (table) {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('lat', 255).nullable();
      table.string('lng', 255).nullable();
      table.tinyint('active').nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('map');
  };