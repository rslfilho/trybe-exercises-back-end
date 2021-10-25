const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const crypto = require('crypto');

const app = express();

app.use(express.json());
app.use(cors());
app.use(authMiddleware); // Bônus 01

// Exercício 01
app.get('/ping', (_req, res) => {
  return res.json({ message: 'pong' });
});

// Exercício 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello, ${name}` });
});

// Exercício 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: `Unauthorized` });
  return res.status(200).json({ message: `Hello, ${name}` });
});

// Exercício 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.json({ message: `Seu nome é ${name}, e você tem ${age} anos de idade` });
});

// Exercício 05 e 06
app.get('/simpsons', async (_req, res, next) => {
  try {
    const simpsons = JSON.parse(await fs.readFile('./src/utils/simpsons.json', 'utf-8'));
    return res.json(simpsons);
  } catch (err) {
    next(err)
  }
});

// Exercício 07
app.get('/simpsons/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const simpsons = JSON.parse(await fs.readFile('./src/utils/simpsons.json', 'utf-8'));
    const charachter = simpsons.find((char) => char.id === id);
    if (!charachter) return res.status(404).json({ message: 'simpson not found' });
    return res.status(200).json(charachter);
  } catch (err) {
    next(err)
  }
});

// Exercício 08
app.post('/simpsons', async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const simpsons = JSON.parse(await fs.readFile('./src/utils/simpsons.json', 'utf-8'));
    const isChar = simpsons.some((char) => parseInt(char.id) === id);
    if (isChar) return res.status(409).json({ message: 'id already exists' });
    simpsons.push({ id, name });
    await fs.writeFile('./src/utils/simpsons.json', JSON.stringify(simpsons));
    return res.status(204).end();
  } catch (err) {
    next(err)
  }
});

// Bônus 2
app.post('/signup', (req, res, next) => {
  try {
    const { email, password, firstName, phone } = req.body;
    if (!(email && password && firstName && phone)) return res.status(401).json({ message: 'missing fields' });
    const randomToken = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token: randomToken } )
  } catch (err) {
    next(err)
  }
});

app.use(errorMiddleware); // Middleware de Erro

app.listen(3000, () => console.log('Server rodando na porta 3000'));
