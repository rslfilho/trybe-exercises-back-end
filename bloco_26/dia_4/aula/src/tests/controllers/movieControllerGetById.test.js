const { expect, assert } = require('chai');
const sinon = require('sinon');

const MovieController = require('../../controllers/movie');
const MovieService = require('../../services/movie');

describe('Acha um filme no DB pelo ID', () => {
  let idMock = '61964cbbd9ae58ffe23149ae';
  const movieMock = {
    _id: {
      $oid: "61964cbbd9ae58ffe23149ae"
    },
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999
  };
  const errorMock = { message: 'Movie ID não encontrado' };
  
  const request = { params: { id: idMock } };
  const response = {};

  describe('quando existe o filme com o ID no DB', () => {
    before(() => {
      sinon.stub(MovieService, 'getById').resolves(movieMock);
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    after(() => {
      MovieService.getById.restore();
    });

    it('função status chamada com código 200', async () => {
      await MovieController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('função json chamada com o filme', async () => {
      await MovieController.getById(request, response);
      expect(response.json.calledWith(movieMock)).to.be.true;
    });
  });

  describe('quando não existe o filme com o ID no DB', () => {
    before(() => {
      sinon.stub(MovieService, 'getById').resolves({ message: 'Movie ID não encontrado' });
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    after(() => {
      MovieService.getById.restore();
    });
    
    it('função status chamada com código 404', async () => {
      await MovieController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.true;
    });

    it('função json chamada com mensagem de erro', async () => {
      const result = await MovieController.getById(request, response);
      expect(response.json.calledWith(errorMock)).to.be.true;
    });
  });
});