const express = require('express');

// if using a model, require it here
 const Games = require('../games-model/gamesModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'Welcome to the games API sprint testing challenge!'})
});

server.get('/games', async (req, res) => {
    const games = await Games.getAll();
    // .select('title', 'year', 'release')
    res.status(200).json(games)
});

server.post('/games', async (req, res) => {
    try{
        const newGame = await Games.add(req.body)

        res.status(201).json(newGame)
    
    } catch (error){
        res.status(422).json(error)
    }
});


module.exports = server;