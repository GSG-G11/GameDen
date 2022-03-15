const Joi = require('joi');

const registerValidationSchema = Joi.object({
  username: Joi.string().required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6}$/)
    .min(6)
    .required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = registerValidationSchema;
