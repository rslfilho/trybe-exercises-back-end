const express = require('express');

const { validadeToken } = require('../middlewares')

const { btc } = require('../controllers');

const router = express.Router();

router.get('/price', validadeToken, btc.price);

module.exports = router;
