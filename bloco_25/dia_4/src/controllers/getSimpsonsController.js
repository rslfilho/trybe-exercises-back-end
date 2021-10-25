const fs = require('fs').promises;

module.exports = async (_req, res, next) => {
  try {
    const simpsons = JSON.parse(await fs.readFile('./src/utils/simpsons.json', 'utf-8'));
    return res.json(simpsons);
  } catch (err) {
    next(err)
  };
};
