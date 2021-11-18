require('dotenv').config();
const express = require('express');
const root = require('./controllers/root');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', root);

app.listen(3000, () => console.log('App running on port 3000'));
