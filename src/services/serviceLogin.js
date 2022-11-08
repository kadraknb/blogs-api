const Joi = require('joi');
const { User } = require('../models');
const { createToken } = require('../utils/utilJwt');

const validateBody = (params) => {
  const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
  });

  const { error, value } = schema.validate(params);

  if (error) {
    error.status = 400;
    error.message = 'Some required fields are missing';
    throw error;
  }
  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
      const e = new Error('Invalid fields');
      e.status = 400;
      throw e;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);

  return token;
};

module.exports = { validateLogin, validateBody };
