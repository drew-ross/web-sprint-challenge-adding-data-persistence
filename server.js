const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./api/projects/projectsRouter');
// const resourcesRouter = require('./api/resources/resourcesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.status(200).json({ message: "api up." }));

server.use('/api/projects', projectsRouter);
// server.use('/api/resources', resourcesRouter);

module.exports = server;