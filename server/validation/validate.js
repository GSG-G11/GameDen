// eslint-disable-next-line import/no-unresolved
const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

module.exports = { schema };
