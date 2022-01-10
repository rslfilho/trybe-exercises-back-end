require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '/uploads')));
app.use(express.static(path.resolve(__dirname, '/envios')));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `Ihull - ${file.originalname}`);
}});

const upload = multer({ storage });

const storageEnvios = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'envios');
  },
  filename: (_req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});

const uploadEnvios = multer({ storage: storageEnvios });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
);

app.post('/envios', uploadEnvios.array('files'), (req, res) =>
  res.status(200).json({ body: req.body, files: req.files })
);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
