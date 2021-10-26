const express = require('express');
const fs = require('fs').promises;

const { validateFields } = require('../middlewares/validateTeams');

const router = express.Router();

router.post('/', validateFields, async (req, res) => {
  const { name, initials , country, league } = req.body;

  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));

  teams.push({ name, initials, country, league });

  await fs.writeFile('./src/utils/teams.json', JSON.stringify(teams));

  return res.status(200).json({ created: { name, initials, country, league } });
});

router.get('/', async (_req, res) => {
  const teams = JSON.parse(await fs.readFile('./src/utils/teams.json', 'utf-8'));
  res.status(200).json({ teams });
});

module.exports = router;
