const express = require('express');

const projectsDb = require('./projectsModel');

const router = express.Router();

router.get('/', (req, res) => {
  projectsDb.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  projectsDb.getProjectById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'A project by that ID was not found.' });
      }
    })
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

router.post('/', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  projectsDb.postProject(project)
    .then(project => res.status(200).json(project))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error }));
});

module.exports = router;