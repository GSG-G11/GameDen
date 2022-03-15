const { join } = require('path');
const schema = require('../validation/validate');

const relativePath = `${__dirname}/../../public`;

const loginValidData = (req, res) => {
  schema
    .validateAsync(req.body, { abortEarly: false })
    .then((value) => {
      res.status(200).json({ status: 200, data: value, message: ' success!' });
    })
    .catch((error) => {
      res.status(401).json({ status: 401, data: error, message: ' failed!' });
    });
};

const getLoginPage = (_, res, next) => {
  try {
    res.status(301).sendFile(join(relativePath, 'login.html'));
  } catch (err) {
    next(err);
  }
};

module.exports = { loginValidData, getLoginPage };
