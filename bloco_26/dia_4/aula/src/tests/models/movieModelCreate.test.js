const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MoviesModel = require('../../models/movie');

describe('Insere um novo filme no BD', () => {
  let connectionMock;
  let DBServer;

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    // const ID_EXAMPLE = '604cb554311d68f491ba5781';
    // const insertOne = async () => ({ insertedId: ID_EXAMPLE });
    // const collection = async () => ({ insertOne });
    // const db = async (databaseName) => ({ collection });
    // const getConnectionMock = async () => ({ db });

    // connectionMock = (await getConnectionMock()).db('exercise_26_4');
    
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
    // let find = await connectionMock.db('exercise_26_4').collection('movies').find().toArray();
    // console.log(find);
    // await connectionMock.db('exercise_26_4').collection('movies').drop();
    // let find = await connectionMock.db('exercise_26_4').collection('movies').find().toArray();
    // console.log(find);

    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

    it('deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.db('exercise_26_4').collection('movies').findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
    });
  });
});
