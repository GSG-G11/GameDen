const express = require('express');
const {
  createUserHandle,
  getRegisterPage,
  logout,
  loginValidData,
  getLoginPage
} = require('../../controllers');
const { redirectToDefault, authenticateToken } = require('../../middleware');



const user = express.Router();

user.get('/logout', authenticateToken, logout);
user.get('/register', redirectToDefault, getRegisterPage);
user.post('/api/register', redirectToDefault, createUserHandle);

user.post('/api/login', redirectToDefault, loginValidData);
user.get('/login', redirectToDefault, getLoginPage);



module.exports = user;
