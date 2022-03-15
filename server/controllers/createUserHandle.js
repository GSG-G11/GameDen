const { join } = require('path');
const { checkUserQuery, createUserQuery } = require('../database/queries');
const registerValidationSchema = require('../validation');
const { hashPassword } = require('./hashHandle');
const { generateToken } = require('./tokenHandle');

const relativePath = `${__dirname}/../../public`;

module.exports = {
  createUserHandle: ({ body }, res, next) => {
    const { username, email, password, confirmPassword } = body;

    // serve side validation
    registerValidationSchema
      .validateAsync({ username, email, password, confirmPassword })
      .then(async () => {
        checkUserQuery(email)
          .then((result) => {
            const isExist = result.rows[0].count >= 1;
            if (isExist)
              return res.status(403).json({
                status: 403,
                oldInput: body,
                message: 'Email already was used',
                filedInputError: 'email',
              });
            return hashPassword(password)
              .then((passwordHashed) =>
                createUserQuery(username, email, passwordHashed)
                  .then(() => {
                    const options = { expiresIn: '24h' };
                    generateToken(
                      { username, email },
                      process.env.ACCESS_TOKEN_SECRET,
                      options,
                    ).then((token) => {
                      res
                        .status(200)
                        .cookie('username', username)
                        .cookie('accessToken', token)
                        .json({
                          status: 200,
                          message: 'Register successfully',
                        });
                    });
                  })
                  .catch((error) => next(error)),
              )
              .catch((error) => next(error));
          })
          .catch((error) => next(error));
      })
      .catch((error) => {
        const { _original } = error;
        res.status(403).json({
          status: 403,
          oldInput: _original,
          message: error.details[0].message,
          filedInputError: error.details[0].path[0],
        });
      });
  },

  getRegisterPage: (_, res, next) => {
    try {
      res.status(301).sendFile(join(relativePath, 'register.html'));
    } catch (err) {
      next(err);
    }
  },

  logout: (_, res, next) => {
    try {
      res.status(301).clearCookie('accessToken').clearCookie('username').redirect('/');
    } catch (err) {
      next(err);
    }
  },


};
