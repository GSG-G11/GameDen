const { generateToken, checkToken } = require('./tokenHandle');
const { hashPassword, comparePasswords } = require('./hashHandle');
const { handleErrorNotFound, handleErrorServer } = require('./ErrorHandle');

module.exports = {
  generateToken,
  checkToken,
  hashPassword,
  comparePasswords,
  handleErrorNotFound,
  handleErrorServer,
};
