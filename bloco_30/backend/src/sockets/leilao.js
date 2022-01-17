const produtos = [
  {
    id: 1,
    name: 'quadro',
    image: 'https://http2.mlstatic.com/D_NQ_NP_639274-MLB48352969808_112021-O.webp',
    valor: 0,
    ultimoLance: '',
  },
  {
    id: 2,
    name: 'skate',
    image: 'https://http2.mlstatic.com/D_NQ_NP_751831-MLB47273101541_082021-O.webp',
    valor: 0,
    ultimoLance: '',
  },
  {
    id: 3,
    name: 'jogo de panelas',
    image: 'https://http2.mlstatic.com/D_NQ_NP_807067-MLB47603710633_092021-O.webp',
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
