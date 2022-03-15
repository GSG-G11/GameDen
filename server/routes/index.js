const express = require('express');
const loginValedate = require('../controllers/login');

const router = express.Router();

router.post('/login', loginValedate);

module.exports = router;
