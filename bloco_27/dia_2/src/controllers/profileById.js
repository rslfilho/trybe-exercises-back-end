const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const profiles = JSON.parse(await fs.readFile('./src/profiles.json', 'utf-8'));
  const profile = profiles.find(({ id: storedId }) => storedId === id);
  delete profile.password;
  if (!profile) return next({ statusCode: 404, message: 'Perfil não encontrado' });

  res.status(200).json(profile);
};
