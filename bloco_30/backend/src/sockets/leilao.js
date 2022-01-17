const produtos = [
  {
    id: 1,
    name: 'Nato',
    image: 'http://localhost:3001/img/nato.png',
    valor: 0,
    ultimoLance: '',
  },
  {
    id: 2,
    name: 'Rafa',
    image: 'http://localhost:3001/img/rafa.png',
    valor: 0,
    ultimoLance: '',
  },
  {
    id: 3,
    name: 'Ricci',
    image: 'http://localhost:3001/img/ricci.png',
    valor: 0,
    ultimoLance: '',
  },
];

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} conectou`);
    let username = '';

    socket.emit('setProducts', produtos);

    socket.on('lance', ({ id, username }) => {
      produtos.forEach((produto) => {
        if (produto.id === id) {
          produto.valor += 5;
          produto.ultimoLance = username;
          io.emit('setProducts', produtos);
        }
      });
    });

    socket.on('setName', (name) => {
      username = name;
    })
  });
};
