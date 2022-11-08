const { serviceUser } = require('../services');

const createUser = async (req, res) => {
  const body = serviceUser.validateBody(req.body);

  const token = await serviceUser.createUser(body);
  res.status(201).json({ token });
};

const getUser = async (req, res) => {
  const result = await serviceUser.getUser();
  res.status(200).json(result);
};

module.exports = { createUser, getUser };