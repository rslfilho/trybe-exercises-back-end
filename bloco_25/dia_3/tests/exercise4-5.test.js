const { expect } = require("chai");
const { escrevendoConteudo } = require("..");

describe('Testando se escrevendoConteudo()', () => {
  const resposta = escrevendoConteudo('arquivo.txt', 'Eu sou um arquivo.');
  
  it('após escrever o arquivo, retorna "Ok"', () => {
    expect(resposta).to.be.equal('Ok');
  });

  it('o retorno é uma string', () => {
    expect(resposta).to.be.a('string');
  });
});
