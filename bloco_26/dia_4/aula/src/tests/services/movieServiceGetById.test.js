const { expect } = require('chai');
const sinon = require('sinon');

const MovieService = require('../../services/movie');
const MovieModel = require('../../models/movie');

describe('Acha um filme no DB pelo ID', () => {
  let idMock = '61964cbbd9ae58ffe23149ae';
  const movieMock = {
    _id: {
      $oid: "61964cbbd9ae58ffe23149ae"
    },
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999
  }

  describe('quando existe o filme com o ID no DB', () => {
    before(() => {
      sinon.stub(MovieModel, 'getById').resolves(movieMock)
    });

    after(() => {
      MovieModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MovieService.getById(idMock);
      expect(response).to.be.a('object');
    });

    it('o objeto retornado tem todas as propriedades', async () => {
      const response = await MovieService.getById(idMock);
      expect(response).to.have.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    });
  });

  describe('quando não existe o filme com o ID no DB', () => {
    before(() => {
      sinon.stub(MovieModel, 'getById').resolves(null)
    });

    after(() => {
      MovieModel.getById.restore();
    });
    
    it('retorna um objeto com messagem de erro', async () => {
      const response = await MovieService.getById(idMock);
      expect(response).to.be.a('object');
      expect(response).to.have.property('message');
    });

    it('messagem de erro seja "Movie ID não encontrado"', async () => {
      const response = await MovieService.getById(idMock);
      expect(response.message).to.eql('Movie ID não encontrado');
    });
  });
});