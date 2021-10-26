const axios = require('axios');

const price = async (_req, res, next) => {
  const { data } = await axios.get('://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  res.status(200).json(data);
  next();
};

module.exports = {
  price,
};
