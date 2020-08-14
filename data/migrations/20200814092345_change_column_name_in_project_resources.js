
exports.up = function (knex) {
  return knex.schema
    .table('project_resources', tbl => {
      tbl.renameColumn('resources_id', 'resource_id');
    });
};

exports.down = function (knex) {
  return knex.schema
    .table('project_resources', tbl => {
      tbl.renameColumn('resource_id', 'resources_id');
    });
};
