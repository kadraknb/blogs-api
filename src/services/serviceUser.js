const Joi = require('joi');
const { createToken } = require('../utils/utilJwt');
const { User } = require('../models');

const validateBody = (params) => {
  const schema = Joi.object({
      displayName: Joi.string().min(8).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      image: Joi.string(),
  });

  const { error, value } = schema.validate(params);

  if (error) {
    error.status = 400;
    throw error;
  }
  return value;
};

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
      const e = new Error('User already registered');
      e.status = 409;
      throw e;
  }

  const ress = await User.create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = ress.dataValues;

  const token = createToken(userWithoutPassword);
  return token;
};

module.exports = { createUser, validateBody };