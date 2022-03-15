const { join } = require('path');

const { checkToken } = require('../controllers');

module.exports = {
  // inverse protected middleware
  redirectToDefault: ({ cookies }, res, next) => {
    const { accessToken } = cookies;

    if (!accessToken) return next();

    return checkToken(accessToken, process.env.ACCESS_TOKEN_SECRET)
      .then(() => res.status(302).redirect('/'))
      .catch(() =>
        res
          .status(500)
          .clearCookie('accessToken')
          .clearCookie('username')
          .sendFile(join(__dirname, '..', '..', 'public', 'error', '500.html')),
      );
  },
};
