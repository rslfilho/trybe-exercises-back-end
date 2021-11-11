const express = require('express');

const { isValidNewUser, isValidUser } = require('./middlewares');

const { User } = require('./controllers');

const app = express();

app.use(express.json());

app.post('/mongo/user', isValidNewUser, User.create);
app.get('/mongo/user', User.getAll);
app.get('/mongo/user/:id', User.getById);
app.put('/mongo/user/:id', isValidNewUser, isValidUser, User.updateById);

app.listen(3000, () => console.log('App running on port 3000!'));
