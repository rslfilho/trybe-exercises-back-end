const express = require('express');



const http = require('http').createServer();

const io = require('socket.io')(
  http,
  {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  },
);

require('./sockets/leilao')(io);

http.listen(3001, () => console.log('App running on PORT 3001'));
