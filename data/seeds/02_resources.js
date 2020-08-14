
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'computer', description: 'Highly-recommended tool for web developers' },
        { id: 2, name: 'coffee machine', description: 'Highly-recommended tool for web developers' },
        { id: 3, name: 'potted plant', description: 'For increased office morale. Creates oxygen.' },
      ]);
    });
};
