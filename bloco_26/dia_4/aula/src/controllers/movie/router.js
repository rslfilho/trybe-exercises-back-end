const express = require('express');

const movieController = require('./index');

const router = express.Router({ mergeParams: true });

router.post('/', movieController.create);
router.get('/:id', movieController.getById);

module.exports = router;