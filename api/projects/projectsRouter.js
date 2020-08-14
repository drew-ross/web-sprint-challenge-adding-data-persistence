const express = require('express');

const projectsDb = require('./projectsModel');

const router = express.Router();

router.get('/', (req, res) => {
  projectsDb.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

module.exports = router;