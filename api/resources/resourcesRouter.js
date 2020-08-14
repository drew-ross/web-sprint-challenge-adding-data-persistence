const express = require('express');

const resourcesDb = require('./resourcesModel');

const router = express.Router();

router.get('/', (req, res) => {
  resourcesDb.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(error => res.status(500).json({ message: 'There was a problem with the server.', error: error.message }));
});

module.exports = router;