const express = require('express');

const moviesRouter = require('./movie/router');

const root = express.Router({ mergeParams: true });

root.use('/movies', moviesRouter);

module.exports = root;