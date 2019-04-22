const express = require('express');

// if using a model, require it here

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'Welcome to the games API sprint testing challenge!'})
});

module.exports = server;