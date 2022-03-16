const { generateToken, checkToken } = require('./tokenHandle');
const { hashPassword, comparePasswords } = require('./hashHandle');
const { handleErrorNotFound, handleErrorServer } = require('./ErrorHandle');
const {
  createUserHandle,
  getRegisterPage,
  logout,
} = require('./createUserHandle');

const { loginValedate, loginValidData, getLoginPage } = require('./login');

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
  loginValedate,
  loginValidData,
  getLoginPage,
};
