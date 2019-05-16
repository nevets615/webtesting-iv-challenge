exports.up = function(knex, user) {
    return knex.schema.createTable('projects', function(user) {
      user.increments();
  
      user.string('name', 128).notNullable();
      user.text('description').notNullable();
      user.boolean('completed').defaultTo(true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };