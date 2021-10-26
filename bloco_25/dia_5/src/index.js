const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');

const {
  userRouter,
  btcRouter,
  postsRouter,
  teamsRouter } = require('./routers')

const { errorHandler, logger, timeTracker } = require('./middlewares');

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use('/user', rescue(userRouter));
app.use('/btc', btcRouter);
app.use('/posts', rescue(postsRouter));
app.use('/teams', teamsRouter);

app.use(errorHandler);

app.use(timeTracker);

// app.all('*', (_req, res) => {
//   res.status(404).json({ "message": "Opsss, route not found!" });
// });


app.listen(3000, () => console.log('App listening at port 3000'));
