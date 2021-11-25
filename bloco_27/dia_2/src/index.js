const express = require('express');
const path = require('path');

const uploadMiddleware = require('./middlewares/upload');
const uploadController = require('./controllers/upload');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../uploads')));

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/upload', uploadMiddleware.single('file'), uploadController);

app.use(error);

app.listen(3000, () => console.log('Running'));
