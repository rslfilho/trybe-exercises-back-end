const express = require('express');
const path = require('path');

const uploadMiddleware = require('./middlewares/upload');
const multipleMiddleware = require('./middlewares/multiple');
const profileMiddleware = require('./middlewares/profile');

const uploadController = require('./controllers/upload');
const multipleController = require('./controllers/multiple');
const profileController = require('./controllers/profile');
const profileByIdController = require('./controllers/profileById');

const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../uploads')));

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/upload', uploadMiddleware.single('file'), uploadController);
app.post('/multiple', multipleMiddleware.array('files'), multipleController);
app.post('/profile', profileMiddleware.single('profilePic'), profileController);

app.get('/profiles/:id', profileByIdController);

app.use(error);

app.listen(3000, () => console.log('Running'));
