const db = require('../../data/dbConfig');

module.exports = {
  getResources,
  postResource
};

function getResources() {
  return db('resources')
    .then(resources => resources)
    .catch(err => console.log(err));
}

function getResourceById(id) {
  return db('resources')
    .where({ id })
    .then(resource => resource)
    .catch(err => console.log(err));
}

function postResource(resource) {
  return db('resources')
    .insert(resource)
    .then(id => getResourceById(id))
    .catch(err => {
      console.log(err);
      return null;
    });
}