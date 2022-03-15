const express = require('express');
const error = require('./errors');

const router = express();

// -------------------- Handle Error ---------------------
router.use(error);

module.exports = router;
