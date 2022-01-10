const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { name, email, password, bio } = req.body;
  const { filename } = req.file;

  const profiles = JSON.parse(await fs.readFile('./src/profiles.json', 'utf-8'));
  const newProfiles = [ ...profiles, { id: filename, name, email, password, bio }];
  await fs.writeFile('./src/profiles.json', JSON.stringify(newProfiles));

  res.status(201).json({ message: `Perfil ${filename} criado com sucesso` });
};
