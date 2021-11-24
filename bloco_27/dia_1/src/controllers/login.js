const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

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

    const usersData = JSON.parse(await fs.readFile('./src/models/data/users.json', 'utf-8'));

    const { admin } = usersData.find((user) => user.username === username);

    const token = jwt.sign({ username, admin }, secret, JWT_CONFIG);

    return res.status(200).json({ token });
  } catch(err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  };
};
