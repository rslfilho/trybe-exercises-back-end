const express = require('express');

const ping = require('./ping/router');
const cep = require('./cep/router');

const root = express.Router();

root.use('/ping', ping);
root.use('/cep', cep);

module.exports = root;
