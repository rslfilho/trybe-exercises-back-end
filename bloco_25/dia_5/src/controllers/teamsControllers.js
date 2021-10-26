const fs = require('fs').promises;

const add = async (req, res, next) => {
  const { name, initials , country, league } = req.body;

  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));

  teams.push({ name, initials, country, league });

  await fs.writeFile('./src/utils/teams.json', JSON.stringify(teams));

  res.status(201).json({ created: { name, initials, country, league } });
  next();
};

const getAll = async (_req, res, next) => {
  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));
  res.status(200).json({ teams });
  next();
};

module.exports = {
  add,
  getAll,
};
