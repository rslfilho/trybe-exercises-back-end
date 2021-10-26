const fs = require('fs').promises;

module.exports = async (_req, res) => {
  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));
  res.status(200).json({ teams });
};
