const express = require('express');

const movieController = require('./index');

const router = express.Router({ mergeParams: true });

router.post('/', movieController.create);

module.exports = router;