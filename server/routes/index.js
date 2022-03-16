const express = require('express');

const loginValedate = require('../controllers/login');
const cookieMaker = require('../controllers/authorization');

const error = require('./errors');
const user = require('./users/authRoutes');


const router = express();

router.use(user);

// -------------------- Handle Error ---------------------
router.use(error);


router.post('/login', loginValedate);
router.get('/test', cookieMaker);
module.exports = router;
