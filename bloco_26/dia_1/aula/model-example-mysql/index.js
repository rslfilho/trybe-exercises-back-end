require('dotenv').config();
const express = require('express');

const Author = require('./models/author');
const Book = require('./models/book');
const BookMiddleware = require('./middlewares/books');

const AuthorM = require('./models/authorM');
const BookM = require('./models/booksM');

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { authorId } = req.query;

  if (authorId) {
    const books = await Book.getByAuthorId(authorId);
    return res.status(200).json(books);
  }

  const books = await Book.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getById(id);

  if (!books) return res.status(404).json({ message: "Not Found"});

  res.status(200).json(books);
});

app.get('/books/author/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: "Not Found"});

  res.status(200).json(books);
});

app.post('/books', BookMiddleware.isValid, async (req, res) => {
  const { title, author_id } = req.body;

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '})
});

app.get('/mongo/authors', async (_req, res) => {
  const authors = await AuthorM.getAll();

  return res.status(200).json(authors);
});

app.get('/mongo/books', async (_req, res) => {
  const books = await BookM.getAll();

  return res.status(200).json(books);
});

app.get('/mongo/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await BookM.getById(id);

  if (!book) return res.status(404).json({ message: "Not Found"});
  res.status(200).json(book);
});

app.get('/mongo/books/author/:id', async (req, res) => {
  const { id } = req.params;
  const books = await BookM.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: "Not Found"});

  res.status(200).json(books);
});

app.post('/mongo/books', BookMiddleware.isValid, async (req, res) => {
  const { title, author_id } = req.body;
  const book = await BookM.create(title, author_id);

  res.status(200).json(book);
})

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
