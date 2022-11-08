const { serviceUser } = require('../services');

const createUser = async (req, res) => {
  const body = serviceUser.validateBody(req.body);

  const token = await serviceUser.createUser(body);
  res.status(201).json({ token });
};

module.exports = { createUser };