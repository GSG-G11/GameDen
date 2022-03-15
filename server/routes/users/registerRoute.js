const express = require('express');
const { createUserHandle,getRegisterPage } = require('../../controllers');

const user = express.Router();


user.get('/register',getRegisterPage)
user.post('/api/register',createUserHandle)


module.exports = user;