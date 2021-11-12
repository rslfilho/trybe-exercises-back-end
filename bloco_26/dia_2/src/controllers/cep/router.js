const express = require('express');
const rescue = require('express-rescue');

const getByCep = require('./getByCep');
const create = require('./create');

const router = express.Router();

router.get('/:cep', rescue(getByCep));
router.post('/', rescue(create));

module.exports = router;
