const express = require('express');
const {
  createUserHandle,
  getRegisterPage,
  logout,
  loginValedate,
  getLoginPage
} = require('../../controllers');
const { redirectToDefault, authenticateToken } = require('../../middleware');


const user = express.Router();

user.get('/logout', authenticateToken, logout);
user.get('/register', redirectToDefault, getRegisterPage);
user.post('/api/register', redirectToDefault, createUserHandle);

user.post('/api/login', redirectToDefault, loginValedate);
user.get('/login', redirectToDefault, getLoginPage);



module.exports = user;
