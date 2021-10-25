const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const simpsons = JSON.parse(await fs.readFile('./src/utils/simpsons.json', 'utf-8'));
    const charachter = simpsons.find((char) => char.id === id);
    if (!charachter) return res.status(404).json({ message: 'simpson not found' });
    return res.status(200).json(charachter);
  } catch (err) {
    next(err)
  }
};
