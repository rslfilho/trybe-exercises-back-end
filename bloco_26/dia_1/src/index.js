require('dotenv').config();
const express = require('express');

const { isValidNewUser, isValidUser, isValidUserMysql } = require('./middlewares');

const { UserMongo, UserMysql } = require('./controllers');

const app = express();

app.use(express.json());

app.post('/mongo/user', isValidNewUser, UserMongo.create);
app.get('/mongo/user', UserMongo.getAll);
app.get('/mongo/user/:id', UserMongo.getById);
app.put('/mongo/user/:id', isValidNewUser, isValidUser, UserMongo.updateById);

app.post('/mysql/user', isValidNewUser, UserMysql.create);
app.get('/mysql/user', UserMysql.getAll);
app.get('/mysql/user/:id', UserMysql.getById);
app.put('/mysql/user/:id', isValidNewUser, isValidUserMysql, UserMysql.updateById);

app.listen(3000, () => console.log('App running on port 3000!'));
