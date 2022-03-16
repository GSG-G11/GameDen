const express = require('express');

// const { loginValedate } = require('../controllers/login');
// const {loginValidData} = require('../controllers/login');
const cookieMaker = require('../controllers/authorization');

const error = require('./errors');
const user = require('./users/authRoutes');


const router = express();

router.use(user);

// -------------------- Handle Error ---------------------
router.use(error);

// router.post('/api/login', loginValedate);
// router.post('/api/login', loginValidData);
router.get('/test', cookieMaker);

module.exports = router;
