const movieModel = require('../../models/movie');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

module.exports = async (movie) => {
  const { title, directedBy, releaseYear } = movie;

  if (!isValid(title, directedBy, releaseYear)) return false;

  const { id } = await movieModel.create(movie);

  return { id };
};
