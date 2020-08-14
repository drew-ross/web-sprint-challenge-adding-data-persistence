const db = require('../../data/dbConfig');

module.exports = {
  getProjects,
  getProjectById,
  postProject,
  postTask,
  getTaskById,
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

function getTaskById(id) {
  return db('tasks')
    .where('id', id)
    .then(task => task)
    .catch(err => console.log(err));
}

function postTask(projectId, task) {
  return db('tasks')
    .insert({
      ...task,
      project_id: projectId
    })
    .then(id => getTaskById(id))
    .catch(err => console.log(err));
}