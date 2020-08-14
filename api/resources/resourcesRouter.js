const express = require('express');

const resourcesDb = require('./resourcesModel');

const router = express.Router();

router.get('/', (req, res) => {
  resourcesDb.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error: error.message }));
});

router.post('/', (req, res) => {
  const resource = req.body;
  resourcesDb.postResource(resource)
    .then(resource => {
      if (resource) {
        res.status(201).json(resource);
      } else {
        res.status(400).json({ message: 'resource name must be unique' });
      }
    })
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error: error.message }));
});

module.exports = router;