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

    res.status(200).json(games)
});

server.get('/games/:id', async (req, res) => {
   try{  
         const games = await Games.getById(req.params.id);

         
    if(!games){
        res.status(404).json({message: 'game id does not exist!'})
    }

  

        res.status(200).json(games)
    

   } catch (error) {
    res.status(500).json({message: 'error checking game id'})
   }
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