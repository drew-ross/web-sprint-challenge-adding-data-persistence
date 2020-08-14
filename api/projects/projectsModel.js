const db = require('../../data/dbConfig');

module.exports = {
  getProjects,
  getProjectById,
  postProject,
};

function getProjects() {
  return db('projects')
    .then(projects => projects)
    .catch(err => console.log(err));
}

function getProjectById(id) {
  return db('projects')
    .where('id', id)
    .then(project => project[0])
    .catch(err => console.log(err));
}

function postProject(project) {
  return db('projects')
    .insert(project)
    .then(id => getProjectById(id))
    .catch(err => console.log(err));
}