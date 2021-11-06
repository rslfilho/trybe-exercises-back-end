const express = require('express');
const rescue = require('express-rescue');

const recipesRouter = require('./routers/recipesRouter');
const errorHandler = require('./middlewares/errorHandlersMiddleware');

const app = express();
app.use(express.json());

app.get('/open', function (req, res) {
  return res.send('open!')
});

function validatePrice(req, res, next) {
  const { price } = req.body;
  if(!price || typeof price !== 'number' || price < 0) return res.status(400).json({ message: 'Invalid data!'});

  next();
};

app.use('/recipes', rescue(recipesRouter));

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.use(errorHandler);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
