const express = require('express');
const { handleErrorNotFound, handleErrorServer } = require('../../controllers');

const error = express();

// -------------------- Handle Error Not Found page ---------------------
error.use(handleErrorNotFound);

// -------------------- handle Error Server ---------------------
error.use(handleErrorServer);

module.exports = error;
