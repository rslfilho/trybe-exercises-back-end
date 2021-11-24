require('dotenv').config();
const express = require('express');

const validateJWT = require('./middlewares/validateJWT');
const login = require('./controllers/login');
const userMe = require('./controllers/usersMe');
const topSecret = require('./controllers/topSecret');
const signup = require('./controllers/signup');

const app = express();

app.use(express.json());

app.get('/top-secret', validateJWT, topSecret)
app.post('/login', login);
app.get('/users/me', validateJWT, userMe)
app.post('/signup', signup);

app.listen(3000, () => console.log('App running on Port 3000'));
