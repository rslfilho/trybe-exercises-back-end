const { expect } = require("chai");
const { escrevendoConteudo } = require("..");

describe('Testando se escrevendoConteudo()', () => {
  
  it('após escrever o arquivo, retorna "Ok"', () => {
    const resposta = escrevendoConteudo('arquivo.txt', 'Eu sou um arquivo.');
    expect(resposta).to.be.equal('Ok');
  });

  it('o retorno é uma string', () => {
    const resposta = escrevendoConteudo('arquivo.txt', 'Eu sou um arquivo.');
    expect(resposta).to.be.a('string');
  });
});
