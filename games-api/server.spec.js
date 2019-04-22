const server = require('./server');

const request = require('supertest');

describe('GET /', () => {
    it('should return status 200', async () => {
    
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
    });
});