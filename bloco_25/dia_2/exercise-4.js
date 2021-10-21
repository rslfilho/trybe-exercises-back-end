const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';
const novoArquivo = 'simpsonFamily.json';

// 4.1

const printNames = async () => {
  try {
    const simpsons = JSON.parse(await fs.readFile(nomeDoArquivo, 'utf-8'));

    simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));

  } catch (err) {
    console.log(err.message);
  };
};

printNames();

// 4.2

const getById = async (charId) => {
  try {
    const simpsons = JSON.parse(await fs.readFile(nomeDoArquivo, 'utf-8'));
    const character = simpsons.find(({ id }) => +id === charId);
    console.log('\n');
    return new Promise((resolves, rejects) => {
      if(character) resolves(character.name);
      rejects(new Error('id não encontrado'));
    })
  } catch (err) {
    console.log(err.message);
  };

};

getById(9)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

// 4.3

const takeTenAndSix = async () => {
  try {
    const simpsons = JSON.parse(await fs.readFile(nomeDoArquivo, 'utf-8'));
    const filteredSimpsons = simpsons.filter(({ id }) => +id !== 6 && +id !== 10);
    await fs.writeFile(nomeDoArquivo, JSON.stringify(filteredSimpsons));
  } catch (err) {
    console.log(err.message);
  };
};

takeTenAndSix();

// 4.4

const createFamily = async () => {
  try {
    const simpsons = JSON.parse(await fs.readFile(nomeDoArquivo, 'utf-8'));
    const filteredSimpsons = simpsons.filter(({ id }) => +id <= 4);
    await fs.writeFile(novoArquivo, JSON.stringify(filteredSimpsons));
  } catch (err) {
    console.log(err.message);
  };
};

createFamily();

// 4.5

const addNelson = async () => {
  try {
    const simpsonsFamily = JSON.parse(await fs.readFile(novoArquivo, 'utf-8'));
    simpsonsFamily.push({ id: "5", name: "Nelson Muntz"});
    await fs.writeFile(novoArquivo, JSON.stringify(simpsonsFamily));
  } catch (err) {
    console.log(err.message);
  };
};

// addNelson();

// 4.6

const chageChar = async () => {
  try {
    const simpsonsFamily = JSON.parse(await fs.readFile(novoArquivo, 'utf-8'));
    const newSimpsons = simpsonsFamily.map(({ name, id }) => {
      if(name === 'Nelson Muntz') {
        return { id, name: 'Maggie Simpson'};
      }
      return { id, name };
    });
    await fs.writeFile(novoArquivo, JSON.stringify(newSimpsons));
  } catch (err) {
    console.log(err.message);
  };
};

chageChar();
