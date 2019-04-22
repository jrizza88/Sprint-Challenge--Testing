const server = require('./server');

const Games = require('../games-model/gamesModel');


const request = require('supertest');

describe('GET /', () => {
    it('should return status 200', async () => {
    
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });

describe('GET /games', () => {

    it('should return list of games and http status 200', async () => {
        const res = await request(server).get('/games');

        expect(res.status).toBe(200);
    });

    it('should return empty array when no games are listed', async () => {
        const res = await request(server).get('/games');

        await Games.remove(0);
        await Games.remove(1);
        await Games.remove(2);

        expect(res.body).toEqual([]);
    });

});

});