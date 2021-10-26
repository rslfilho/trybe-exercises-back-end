const axios = require('axios');

const price = async (_req, res) => {
  const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  return res.status(200).json(data);
};

module.exports = {
  price,
};
