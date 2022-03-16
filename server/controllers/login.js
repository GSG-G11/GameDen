const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { join } = require('path');

const { loginValidationSchema } = require('../validation');
const { getUserQuery } = require('../database/queries');

const relativePath = `${__dirname}/../../public`;

const loginValidData = (req, res) => {
  loginValidationSchema
    .validateAsync(req.body, { abortEarly: false })
    .then(() => {
      getUserQuery(req.body.email)
        .then((data) => {
          const isValid = data.rows.length > 0;
          if (isValid) {
            compare(req.body.password, data.rows[0].password)
              .then((hashExists) => {
                if (hashExists) {
                  const tokenBody = {
                    id: data.rows[0].id,
                    username: data.rows[0].user_name,
                    email: data.rows[0].email,
                  };
                  const token = sign(
                    tokenBody,
                    process.env.ACCESS_TOKEN_SECRET,
                  );
                  res
                    .status(200)
                    .cookie('username', data.rows[0].user_name)
                    .cookie('id', data.rows[0].id)
                    .cookie('accessToken', token)
                    .json({
                      status: 200,
                      message:
                        ' success! You have account log in go to home page',
                    });
                } else {
                  res.status(401).json({
                    status: 401,
                    errorType: 'passwordError',
                    message: 'Password Error!',
                  });
                }
              })
              .catch(() => {
                res.status(200).json({
                  status: 401,
                  message: ' response came back empty! password error',
                });
              });
          } else {
            res.status(401).json({
              status: 401,
              errorType: 'emailError',
              message: 'This email not exist please sign up',
            });
          }
        })
        .catch((error) =>
          res.status(401).json({
            status: 401,
            data: error,
            message: ' failed! Invalid input',
          }),
        );
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

module.exports = {
  loginValidData,
  getLoginPage,
};
