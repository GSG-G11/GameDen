const createUserQuery = require('./createUserQuery');
const checkUserQuery = require('./checkUserQuery');
const getUserQuery = require('./getUserQuery');
const getAllGamesQuery = require('./getAllGamesQuery');
const addGameToUserQuery = require('./addGameToUserQuery');
const getAllGamesUserQuery = require('./getAllGamesUserQuery');
const deleteUserGamesQuery = require('./deleteUserGamesQuery');

module.exports = {
  createUserQuery,
  checkUserQuery,
  getUserQuery,
  getAllGamesQuery,
  addGameToUserQuery,
  getAllGamesUserQuery,
  deleteUserGamesQuery,
};
