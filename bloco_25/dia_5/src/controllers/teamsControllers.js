const fs = require('fs').promises;

const add = async (req, res) => {
  const { name, initials , country, league } = req.body;

  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));

  teams.push({ name, initials, country, league });

  await fs.writeFile('./src/utils/teams.json', JSON.stringify(teams));

  return res.status(201).json({ created: { name, initials, country, league } });
};

const getAll = async (_req, res) => {
  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));
  res.status(200).json({ teams });
};

module.exports = {
  add,
  getAll,
};
