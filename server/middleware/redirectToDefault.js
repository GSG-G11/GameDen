const { join } = require('path');

const { checkToken } = require('../controllers');

module.exports = {
  redirectToDefault: ({ cookies }, res, next) => {
    next();
    // const { accessToken } = cookies;

    // if (!accessToken) return next();

    // return checkToken(accessToken, process.env.ACCESS_TOKEN_SECRET)
    //   .then(() => res.status(302).redirect('/home'))
    //   .catch(() =>
    //     res
    //       .status(401)
    //       .sendFile(join(__dirname, '..', '..', 'public', 'error', '401.html')),
    //   );
  },
};
