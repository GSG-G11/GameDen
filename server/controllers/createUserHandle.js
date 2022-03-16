const { join } = require('path');
const { checkUserQuery, createUserQuery } = require('../database/queries');
const registerValidationSchema = require('../validation');
const { hashPassword } = require('./hashHandle');
const { generateToken } = require('./tokenHandle');

const relativePath = `${__dirname}/../../public`;



module.exports = {
  createUserHandle: ({ body }, res) => {
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
                  .then((data) => {
                    const options = { expiresIn: '24h' };
                    generateToken(
                      { id: data.rows[0].id, username, email },
                      process.env.ACCESS_TOKEN_SECRET,
                      options,
                    ).then((token) => {
                      res
                        .status(200)
                        .cookie('id', data.rows[0].id)
                        .cookie('username', username)
                        .cookie('accessToken', token)
                        .json({
                          status: 200,
                          message: 'Register successfully',
                        });
                    });
                  })
                  .catch(() => res.status(500).sendFile(join(relativePath, 'error/500.html'))),
              )
              .catch(() => res.status(500).sendFile(join(relativePath, 'error/500.html')));
          })
          .catch(() => res.status(500).sendFile(join(relativePath, 'error/500.html')));
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
      res
        .status(301)
        .clearCookie('accessToken')
        .clearCookie('username')
        .clearCookie('id')
        .redirect('/');
    } catch (err) {
      next(err);
    }
  },
};
