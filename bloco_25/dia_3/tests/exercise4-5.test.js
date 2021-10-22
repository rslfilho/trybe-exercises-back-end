const { expect } = require("chai");
const { escrevendoConteudo } = require("..");
const fs = require('fs');
const { stub, restore } = require('sinon');

describe('Testando se escrevendoConteudo()', () => {
  before(() => {
    stub(fs, 'writeFileSync').returns(undefined);
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  
  it('após escrever o arquivo, retorna "Ok"', () => {
    const resposta = escrevendoConteudo('arquivo.txt', 'npm i -D mocha chai sinon nyc @types/mocha @types/sinon-chai');
    expect(resposta).to.be.equal('Ok');
  });

  it('o retorno é uma string', () => {
    const resposta = escrevendoConteudo('arquivo.txt', 'npm i -D mocha chai sinon nyc @types/mocha @types/sinon-chai');
    expect(resposta).to.be.a('string');
  });
});
