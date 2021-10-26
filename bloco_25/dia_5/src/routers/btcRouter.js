const express = require('express');

const { validadeToken } = require('../middlewares')

const { btcPriceController } = require('../controllers');

const router = express.Router();

router.get('/price', validadeToken, btcPriceController);

module.exports = router;
