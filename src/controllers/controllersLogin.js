const { serviceLogin } = require('../services');

const login = async (req, res) => {
    const { email, password } = serviceLogin.validateBody(req.body);

    const token = await serviceLogin.validateLogin({ email, password });

    res.status(200).json({ token });
};

module.exports = { login };