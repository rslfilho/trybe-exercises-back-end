const express = require('express');
const rescue = require('express-rescue');

const { validadeToken } = require('../middlewares')

const { btc } = require('../controllers');

const router = express.Router();

router.get('/price', validadeToken, rescue(btc.price));

module.exports = router;
