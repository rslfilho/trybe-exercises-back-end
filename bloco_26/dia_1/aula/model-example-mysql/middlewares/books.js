const Author = require('../models/author');

const isValid = async (req, res, next) => {
  const { title, author_id } = req.body;

  const ids = await Author.getAllIds();
  const numberIds = ids.map(({ id }) => id);

  if (
    !title
    || title.length < 3
    || !author_id
    || !numberIds.includes(author_id)
  ) return res.status(400).json({ message: 'Dados Inválidos'});

  next();
};

module.exports = {
  isValid,
};
