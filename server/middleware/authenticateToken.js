const { join } = require('path');

const { checkToken } = require('../controllers');

module.exports = {
  // protected middleware
  authenticateToken: ({ cookies }, res, next) => {
    const { accessToken } = cookies;
    if (!accessToken) return res.status(302).redirect('/');
    try {
      return checkToken(accessToken, process.env.ACCESS_TOKEN_SECRET)
        .then(() => {
          next();
        })
        .catch(() =>
          res
            .status(500)
            .clearCookie('accessToken')
            .clearCookie('username')
            .sendFile(
              join(__dirname, '..', '..', 'public', 'error', '500.html'),
            ),
        );
    } catch (error) {
      return res.status(302).redirect('/');
    }
  },
};
