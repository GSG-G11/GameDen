const connection = require('../config/connection');

const getAllGamesQuery = () => connection.query('SELECT * FROM games;');

module.exports = getAllGamesQuery;
