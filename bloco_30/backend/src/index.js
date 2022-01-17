const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

const io = require('socket.io')(
  http,
  {
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  },
);

require('./sockets/leilao')(io);

http.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
