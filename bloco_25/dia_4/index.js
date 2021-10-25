const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 01
app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// Exercício 02
app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.json({ message: `Hello, ${name}` });
});

// Exercício 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) return res.status(401).json({ message: `Unauthorized` });
  
  res.status(200).json({ message: `Hello, ${name}` });
});

// Exercício 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.json({ message: `Seu nome é ${name}, e você tem ${age} anos de idade` });
});

// Exercício 05 e 06
app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = JSON.parse(await fs.readFile('./utils/simpsons.json', 'utf-8'));
    res.json(simpsons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

// Exercício 07
app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const simpsons = JSON.parse(await fs.readFile('./utils/simpsons.json', 'utf-8'));
    const charachter = simpsons.find((char) => char.id === id);
    if (!charachter) return res.status(404).json({ message: 'simpson not found' });
    res.status(200).json(charachter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

// Exercício 08
app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = JSON.parse(await fs.readFile('./utils/simpsons.json', 'utf-8'));
    const isChar = simpsons.some((char) => parseInt(char.id) === id);
    if (isChar) return res.status(409).json({ message: 'id already exists' });
    simpsons.push({ id, name });
    await fs.writeFile('./utils/simpsons.json', JSON.stringify(simpsons));
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

app.listen(3000, () => console.log('Server rodando na porta 3000'));
