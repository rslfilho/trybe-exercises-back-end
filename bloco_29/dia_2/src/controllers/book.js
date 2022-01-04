const express = require('express');

const { Book } = require('../sequelize/models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC'],
        ['createdAt', 'ASC']
      ]
    });

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const bookCreated = await Book.create({ title, author, pageQuantity });

    res.status(200).json(bookCreated);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    const { title, author, pageQuantity } = req.body;
    const updated = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    res.status(200).json({ message: `${updated} livro(s) atualizado(s)` });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    const deleted = await Book.destroy(
      { where: { id } },
    );

    res.status(200).json({ message: `${deleted} livro(s) deletado(s)` });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/author/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const book = await Book.findAll({ where: { author: name } });

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
