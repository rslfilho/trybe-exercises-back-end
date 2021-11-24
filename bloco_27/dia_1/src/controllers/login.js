const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  try{
    const { username, password } = req.body;

    if (
      !username
      || typeof username !== 'string'
      || username.length < 5
      || !password
      || typeof password !== 'string'
      || password.length < 5) {
      return res.status(401).json({ message: 'Usuário ou senha inválido' });
    }

    if (username === 'admin' && password === 's3nh4S3gur4???') {
      const token = jwt.sign({ username, admin: true }, secret, JWT_CONFIG);
      return res.status(200).json({ token });
    }

    const token = jwt.sign({ username, admin: false }, secret, JWT_CONFIG);

    return res.status(200).json({ token });
  } catch(err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  };
};
