const { generateToken, checkToken } = require('./tokenHandle');
const { hashPassword, comparePasswords } = require('./hashHandle');
const { handleErrorNotFound, handleErrorServer } = require('./ErrorHandle');
const {
  createUserHandle,
  getRegisterPage,
  logout,
} = require('./createUserHandle');

const { loginValidData, getLoginPage } = require('./login');

const { getAllGames, addGameToUser ,getAllGamesUser,showAllGamesUser} = require('./gamesHandle');

module.exports = {
  generateToken,
  checkToken,
  hashPassword,
  comparePasswords,
  handleErrorNotFound,
  handleErrorServer,
  createUserHandle,
  getRegisterPage,
  logout,
  loginValidData,
  getLoginPage,
  getAllGames,
  addGameToUser,
  getAllGamesUser,
  showAllGamesUser
};
