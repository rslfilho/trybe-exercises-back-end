const movieService = require('../../services/movie');

module.exports = async (req, res) => {
  const { id } = req.params;

  const response = await movieService.getById(id);

  if ('message' in response) {
    return res
      .status(404)
      .json(response);
  }

  return res
    .status(200)
    .json(response);
};
