const Games = require('./gamesModel');

const db = require('../data/dbConfig');

describe('The Games Model', () => {
    beforeEach(() => {

        return db('games').truncate();
    });

    describe('delete function', () => {
        it('should delete a games by id', async () => {
            await Games.remove(0);
            await Games.remove(1);
            await Games.remove(2);

            const game = await db('games');
            expect(game.id).toBe(undefined);
        });
    });

}); 