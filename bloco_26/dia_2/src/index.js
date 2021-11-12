require('dotenv').config();
const express = require('express');

const root = require('./controllers/router');
const error = require('./middlewares/error');

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/', root);

app.use(error);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
