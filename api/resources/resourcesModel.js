const db = require('../../data/dbConfig');

module.exports = {
  getResources,
};

function getResources() {
  return db('resources')
    .then(resources => resources)
    .catch(err => console.log(err));
}