require('dotenv').config();
const express = require('express');

const authorController = require('./controllers/author');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);
app.get('/authors/:id', authorController.showAuthor);
app.post('/authors', authorController.createAuthor);

app.listen(3000, () => console.log('App running on port 3000'));
