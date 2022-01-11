require('dotenv').config();
const express = require('express');

const cepController = require('./controllers/cep');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (_req, res) => {
  res.status(200).render('index', { cep: null })
});

app.post('/cep', cepController.getByCEP);

app.listen(3000, () => console.log('App running on port 3000'));
