const readline = require('readline-sync');

const getNumbers = () => {
  const number = readline.questionInt('Escolha um número de 0 a 10: ');
  const random = Math.floor(Math.random() * 11);
  return { number, random };
};

const checkNumber = (number, random) => {
  console.log(`Número Sorteado: ${random}`);

  if(number === random) return 'Parabéns, número correto!';

  return 'Opa, não foi dessa vez. Número errado! =(';
};

const sorteioScript = () => {
  const { number, random } = getNumbers();

  const result = checkNumber(number, random);
  console.log(result);

  const playAgain = readline.question('Quer tentar de novo? (S/N) ');

  if(playAgain === 'S' || playAgain === 's') return sorteioScript();

  console.log('Até mais!');
};

sorteioScript();
