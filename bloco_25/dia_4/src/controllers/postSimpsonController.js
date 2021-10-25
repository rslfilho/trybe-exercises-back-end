const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const simpsons = JSON.parse(await fs.readFile('./src/utils/simpsons.json', 'utf-8'));
    const isChar = simpsons.some((char) => parseInt(char.id) === id);
    if (isChar) return res.status(409).json({ message: 'id already exists' });
    simpsons.push({ id, name });
    await fs.writeFile('./src/utils/simpsons.json', JSON.stringify(simpsons));
    return res.status(204).end();
  } catch (err) {
    next(err)
  }
};
