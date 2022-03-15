const { sign, verify } = require('jsonwebtoken');
const getUserQuery = require('../database/queries/getUserQuery');

// const userDetails = {
//     email: ,

// }

const cookieMaker = (req, res) => {
  getUserQuery('brhmhelou@gmail.com', 'Test123s')
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => res.json(error));
};

module.exports = cookieMaker;
