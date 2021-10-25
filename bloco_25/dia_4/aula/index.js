const express = require('express');
const cors = require('cors');

const app = express(); // 1

app.use(express.json());
app.use(cors());

app.get('/hello', (_req, res) => {
  res.status(200).send('Olá Mundo!'); // 4
}); // 2

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 29.0, waitTime: 25 },
];

app.get('/recipes', (_req, res) => {
  res.json(recipes.sort((a, b) => a.name > b.name ? 1 : -1));
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice) && r.price >= minPrice);
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  res.json(drinks.sort((a, b) => a.name > b.name ? 1 : -1));
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinksIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinksIndex] = { ...drinks[drinksIndex], name, price };

  res.status(204).end();
});

app.post('/drinks', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  drinks.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'}); 
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinksIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinksIndex, 1);

  res.status(204).end();
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3
