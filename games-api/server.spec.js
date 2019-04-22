const server = require('./server');

const Games = require('../games-model/gamesModel');

const db = require('../data/dbConfig');

const request = require('supertest');

const kirby = {
    id: 4,
    title: "Kirby's Dream Land",
    genre: 'Platform',
    releaseYear: 1992
};

const mysteryGame = {
    title: 'missingo strikes again'
}

describe('GET /', () => {
    beforeEach(() => {

        return db('games').truncate();
    });
    it('should return status 200', async () => {
    
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });

    describe('GET /games', () => {
        beforeEach(() => {

            return db('games').truncate();
        });
        it('should return http status 200', async () => {
            const res = await request(server).get('/games');

            expect(res.status).toBe(200);
        });

        it('should return list of games', async () => {
            const res = await request(server).get('/games');

            expect(res.body).toEqual([]);
        });

        xit('should return empty array when no games are listed', async () => {
            const res = await request(server).get('/games');
    // removed seed data, as at time of writing no other games exist in table
            await Games.remove(0);
            await Games.remove(1);
            await Games.remove(2);
    // should return an empty array
            expect(res.body).toEqual([]);
        });

    });

    describe('GET /games by id', () => {
        beforeEach(() => {

            return db('games').truncate();
        });
        it('should return http status 404 for a game not found', async () => {
            const res = await request(server).get('/games/:id');
         

            expect(res.status).toBe(404);
        });

    });


});


describe('POST /games', () => {
    beforeEach(() => {

        return db('games').truncate();
    });
    it('should post a new game', async () => {
        let res = await request(server).post('/games')
            .send(kirby)
   
        expect(res.body).toEqual(kirby);
    });

    it('should return status 201', async () => {
        let res = await request(server).post('/games')
            .send(kirby)
   
        expect(res.status).toBe(201);
    });

    it('should post another game, incrementing automatically', async () => {
        let res = await request(server).post('/games')
        .send(kirby)
        .send({title: 'Crash Bandicoot', genre: 'Platform', releaseYear: 1996})

    expect(res.status).toBe(201);
    })

    it('should return status 422 if game info is missing', async () => {
        let res = await request(server).post('/games')
            .send(mysteryGame)

            expect(res.status).toBe(422);
    });

})