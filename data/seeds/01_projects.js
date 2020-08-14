
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Create API', description: 'Make an API with persistent data', completed: false },
        { id: 2, name: 'Build Frontend SPA', description: 'Make an app to connect to API', completed: false },
      ]);
    });
};
