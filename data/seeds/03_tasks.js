
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, project_id: 1, description: 'Drink lots of coffee', notes: 'The more, the better', completed: true },
        { id: 2, project_id: 1, description: 'Code', notes: `We have 3 hours so don't worry about testing.`, completed: false },
        { id: 3, project_id: 2, description: 'Drink some coffee', notes: 'Drink only in the morning so you can sleep', completed: false },
        { id: 4, project_id: 2, description: 'Write code', notes: 'Always test first', completed: false },
        { id: 5, project_id: 2, description: 'Install potted plants in office', notes: 'Green is good', completed: false },
      ]);
    });
};
