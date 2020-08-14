const db = require('../../data/dbConfig');

module.exports = {
  getProjects,
}

function getProjects() {
  return db('projects')
    .then(projects => projects)
    .catch(err => console.log(err));
}