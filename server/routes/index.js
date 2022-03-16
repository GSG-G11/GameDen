const express = require('express');

const error = require('./errors');
const user = require('./users/authRoutes');
const games = require('./games/gameRoutes');

const router = express();

router.use(user);
router.use(games);

// -------------------- Handle Error ---------------------
router.use(error);

module.exports = router;
