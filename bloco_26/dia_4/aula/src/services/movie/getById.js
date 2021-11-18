const movieModel = require('../../models/movie');

module.exports = async (id) => {
  const response = await movieModel.getById(id);

  if (response === false) return { message: 'Movie ID inválido' };
  if (response === null) return { message: 'Movie ID não encontrado' };

  return response;
};
