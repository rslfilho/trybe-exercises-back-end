const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const { username, admin } = decoded;
    
    req.user = {
      username,
      admin
    };

    next();
  } catch (err) {
    return res.status(401).json({ error: { message: err.message } });
  }
};
