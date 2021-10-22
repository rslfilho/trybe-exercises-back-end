const { expect } = require("chai");
const { analiseNumero } = require("..");

describe('Testando analiseNumero()', () => {
  describe('Quando o número passado for maior que 0', () => {
    const retorno = analiseNumero(3);

    it('o retorno deve ser POSITIVO', () => {
      expect(retorno).to.be.equal('Positivo');
    });

    it('o retorno deve ser to tipo string', () => {
      expect(retorno).to.be.a('string');
    });
  });

  describe('Quando o número passado for menor que 0', () => {
    const retorno = analiseNumero(-4);

    it('o retorno deve ser NEGATIVO', () => {
      expect(retorno).to.be.equal('Negativo');
    });

    it('o retorno deve ser to tipo string', () => {
      expect(retorno).to.be.a('string');
    });
  });

  describe('Quando o número passado for igual a 0', () => {
    const retorno = analiseNumero(0);

    it('o retorno deve ser NEUTRO', () => {
      expect(retorno).to.be.equal('Neutro');
    });

    it('o retorno deve ser to tipo string', () => {
      expect(retorno).to.be.a('string');
    });
  });

  describe('Quando o valor passado não for um número', () => {
    it('o retorno deve ser "o valor deve ser um número"', () => {
      const retorno = analiseNumero(null);

      expect(retorno).to.be.equal('o valor deve ser um númnero');
    });
  });
});
