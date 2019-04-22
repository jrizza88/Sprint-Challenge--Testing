const db = require('../data/dbConfig');

module.exports = {
    add,
    getAll,
    remove,
    getById
};

async function add(game) {
    const [id] = await db('games').insert(game);

    return db('games')
        .where({ id })
        .first();
}

function remove(id) {
    return db('games')
        .where({ id })
        .del()
}

function getAll() {
    return db('games');
}

function getById(id) {
    return db('games')
        .where({ id })
        .first();
}