const { generateToken, checkToken } = require('./tokenHandle');
const { hashPassword, comparePasswords } = require('./hashHandle');
const { handleErrorNotFound, handleErrorServer } = require('./ErrorHandle');
const {
  createUserHandle,
  getRegisterPage,
  logout,
} = require('./createUserHandle');

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
};
