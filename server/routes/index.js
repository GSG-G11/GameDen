const express = require('express');
const error = require('./errors');
const user = require('./users/registerRoute');

const router = express();

router.use(user);

// -------------------- Handle Error ---------------------
router.use(error);

module.exports = router;
