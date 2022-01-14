let likes = 0;
let stars = 0;

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} conectou`);

    socket.emit('pong', 'Bem vindo ao servidor Socket.io');
    socket.emit('updateLikes', likes);
    socket.emit('updateStars', stars);

    socket.on('likePost', () => {
      console.log(`${socket.id} clicou em Like`);
      likes += 1;
      io.emit('updateLikes', likes);
    });

    socket.on('starPost', () => {
      console.log(`${socket.id} clicou em Star`);
      stars += 1;
      io.emit('updateStars', stars);
    });
  });
};
