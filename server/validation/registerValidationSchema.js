const Joi = require('joi');

const registerValidationSchema = Joi.object({
  username: Joi.string()
    .required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'co'] },
    })
    .required(),

  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .min(6)
    .required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = registerValidationSchema;
