const express = require('express');

const { posts } = require('../controllers');

const router = express.Router();

router.get('/:id', posts.getById);

router.get('/', posts.getAll);

module.exports = router;
