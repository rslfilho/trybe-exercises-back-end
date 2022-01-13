const net = require('net');
const stdin = process.openStdin();

/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  stdin.addListener('data', (data) => {
    client.write(data.toString());
  })

  client.on('data', (data) => {
    console.log(data.toString());
    // client.end();
  });

  client.on('end', () => {
    console.log('Desconectado do servidor');
  });
});

/* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */


/* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */

