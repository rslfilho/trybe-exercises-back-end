const express = require('express');
const cors = require('cors');

const {
  authHandler,
  errorHandler } = require('./middlewares'); 

const {
  pingHandler,
  helloHandler,
  greetingHandler,
  usersParamsHandler,
  getSimpsonsHandler,
  getSimpsonByIdHandler,
  postSimpsonHandler,
  signUpHandler } = require('./controllers');

const app = express();

app.use(express.json());
app.use(cors());
app.use(authHandler); // Bônus 01

// Exercício 01
app.get('/ping', pingHandler);

// Exercício 02
app.post('/hello', helloHandler);

// Exercício 03
app.post('/greetings', greetingHandler);

// Exercício 04
app.put('/users/:name/:age', usersParamsHandler);

// Exercício 05 e 06
app.get('/simpsons', getSimpsonsHandler);

// Exercício 07
app.get('/simpsons/:id', getSimpsonByIdHandler);

// Exercício 08
app.post('/simpsons', postSimpsonHandler);

// Bônus 2
app.post('/signup', signUpHandler);

app.use(errorHandler); // Middleware de Erro

app.listen(3000, () => console.log('Server rodando na porta 3000'));
