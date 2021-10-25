const crypto = require('crypto');

module.exports = (req, res, next) => {
  try {
    const { email, password, firstName, phone } = req.body;
    if (!(email && password && firstName && phone)) return res.status(401).json({ message: 'missing fields' });
    const randomToken = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token: randomToken } )
  } catch (err) {
    next(err)
  }
};
