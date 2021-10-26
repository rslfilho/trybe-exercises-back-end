const crypto = require('crypto');

const register = (_req, res) => {
  return res.status(201).json({ "message": "user created" });
};

const login = (_req, res) => {
  const randomToken = crypto.randomBytes(12).toString('hex');
  return res.status(200).json({ "token": randomToken });
};

module.exports = {
  register,
  login,
};
