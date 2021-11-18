const MoviesService = require('../../services/movie');

module.exports = async (req, res) => {
  const movie = { ...req.body };

  const id = await MoviesService.create(movie);

  if (!id) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' });
  }

  res.status(201).json({ message: 'Filme criado com sucesso!' });
};
