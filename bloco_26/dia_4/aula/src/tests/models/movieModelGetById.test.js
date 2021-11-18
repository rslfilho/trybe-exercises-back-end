const { expect } = require('chai');
const sinon = require('sinon');

const MovieModel = require('../../models/movie');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Acha um filme no DB pelo ID', () => {
  let connectionMock;
  let DBServer;

  const idMock = '507f191e810c19729de860ea';

  const movieMock = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999
  }

  before(async () => {
    DBServer = await MongoMemoryServer.create();
    const URLMock = DBServer.getUri();

    connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando existe o filme com o ID no DB', () => {
    let id;
    before(async() => {
      const { insertedId } = await connectionMock.db('exercise_26_4')
        .collection('movies').insertOne(movieMock);
      id = insertedId.toString();
    });

    it('retorna um objeto', async () => {
      const [ response ] = await MovieModel.getById(id);

      expect(response).to.be.a('object');
    });

    it('o objeto retornado tem todas as propriedades', async () => {
      const [ response ] = await MovieModel.getById(id);

      expect(response).to.have.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    });
  });

  describe('quando não existe o filme com o ID no DB', () => {
    it('retorna null', async () => {
      const response = await MovieModel.getById(idMock);

      expect(response).to.be.null;
    });
  });
});