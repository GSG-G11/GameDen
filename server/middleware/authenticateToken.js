const { join } = require('path');

const { checkToken } = require('../controllers');

module.exports = {
  authenticateToken: ({ cookies }, res, next) => {
    next();
    // const { accessToken } = cookies;
    // if (!accessToken) return res.status(302).redirect('/');
    // try {
    //   return checkToken(accessToken, process.env.ACCESS_TOKEN_SECRET)
    //     .then((data) => (true ? next() : res.status(302).redirect('/')))
    //     .catch((error) => next(error));
    // } catch (error) {
    //   return res.status(302).redirect('/');
    // }
  },
};
