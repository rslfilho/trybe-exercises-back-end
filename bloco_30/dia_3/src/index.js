const express = require('express');
const httpServer = require('http').createServer();

const EXPRESS_PORT = 3000;
const SOCKET_PORT = 5000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(EXPRESS_PORT, () => console.log(`Express rodando na porta ${EXPRESS_PORT}`));

const io = require('socket.io')(
  httpServer,
  {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  },
);

require('./sockets/feed')(io);

httpServer.listen(SOCKET_PORT, () => console.log(`Socket.io rodando na porta ${SOCKET_PORT}`));
