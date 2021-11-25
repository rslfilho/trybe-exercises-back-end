require('dotenv').config();
const express = require('express');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/envios'));
const upload = multer({ dest: 'uploads' });
const uploadEnvios = multer({ dest: 'envios' });

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
