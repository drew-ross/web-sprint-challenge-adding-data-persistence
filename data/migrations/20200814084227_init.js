
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name', 255)
        .notNullable();
      tbl.text('description');
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments('id');
      tbl.string('name', 255)
        .notNullable()
        .unique();
      tbl.text('description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.text('description')
        .notNullable();
      tbl.text('notes');
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
      //foreign keys
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
      tbl.increments('id');
      //foreign keys
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources');
};
