const crypto = require('crypto');

module.exports = (_req, res) => {
  const randomToken = crypto.randomBytes(12).toString('hex');
  return res.status(200).json({ "token": randomToken });
};
