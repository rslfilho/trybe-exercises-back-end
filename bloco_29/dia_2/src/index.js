require('dotenv').config();
const express = require('express');

const Books = require('./controllers/book');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/books', Books);
app.use('/book', Books);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
