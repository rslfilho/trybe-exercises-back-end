const express = require('express');
const rescue = require('express-rescue');

const get = require('./get');

const router = express.Router();

router.get('/', rescue(get));

module.exports = router;
