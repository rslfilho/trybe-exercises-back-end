const readline = require('readline-sync');

const length = readline.questionInt('Qual a distância? (metros) ');
const time = readline.questionInt('Qual o tempo? (minutos) ');

const getVelocity = (length, time) => {
  const seconds = time * 60;

  return (length / seconds).toFixed(2);
};

console.log(getVelocity(length, time));