const schema = require('../validation/validate');

const loginValedate = (req, res) => {
  schema.validateAsync(req.body, { abortEarly: false })
    .then((value) => {
      res.status(200).json({ status: 200, data: value, message: ' success!' });
    })
    .catch((error) => {
      res.status(401).json({ status: 401, data: error, message: ' failed!' });
    });
};

module.exports = loginValedate;
