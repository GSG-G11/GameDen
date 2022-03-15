const express = require('express');
const {
  createUserHandle,
  getRegisterPage,
  logout,
} = require('../../controllers');
const { redirectToDefault, authenticateToken } = require('../../middleware');

const user = express.Router();

user.get('/logout', authenticateToken, logout);
user.get('/register', redirectToDefault, getRegisterPage);
user.post('/api/register', redirectToDefault, createUserHandle);



module.exports = user;
