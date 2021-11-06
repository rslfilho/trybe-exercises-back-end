const validateName = (name) => name.length > 5 ? true : false;

const validateInitials = (initials) => {
  const initialsLength = initials.length;
  const splittedInitials = initials.split('');

  const isUppercase = splittedInitials.every((char) => char.toUpperCase() === char);

  return initialsLength === 3 && isUppercase;
};

const validateCountry = (country) => country.length > 3 ? true : false;

const validateFields = (req, res, next) => {
  const { name, initials , country } = req.body;

  const isNameValid = validateName(name);
  const areInitialsValid = validateInitials(initials);
  const isCountryValid = validateCountry(country);

  if (!(isNameValid && areInitialsValid && isCountryValid)) return res.status(400).json({ "message": "invalid data" });

  next();
};

module.exports = { validateFields };
