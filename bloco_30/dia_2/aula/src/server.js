/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');

const clients = [];
let count = 0;

const spreadMessage = (name, message) => {
  clients.forEach((client) => {
    if (client.name === name) {
      client.write(`Eu > ${message}`);
    } else {
      client.write(`${name} > ${message}`);
    }
  });
};

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  console.log('Cliente conectado');
  
  count += 1;
  connection.name = count;
  clients.push(connection);

  server.getConnections((err, count) => console.log('Conectados: ' + count));
  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  connection.on('end', () => {
    console.log('Cliente desconectado');
    server.getConnections((err, count) => console.log('Conectados: ' + count));
});

  connection.on('data', (data) => {
    spreadMessage(connection.name, data.toString());
  });
  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  // connection.write('Mensagem do servidor!\r\n');
  // connection.pipe(connection);
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
