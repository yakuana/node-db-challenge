const express = require('express');

const projectsRouter = require('./recipes/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send("Welcome to the Lamda Projects API!")
});

module.exports = server;