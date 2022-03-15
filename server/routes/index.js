const express = require('express');
const loginValedate = require('../controllers/login');
const cookieMaker = require('../controllers/authorization');

const router = express.Router();

router.post('/login', loginValedate);
router.get('/test', cookieMaker);
module.exports = router;
