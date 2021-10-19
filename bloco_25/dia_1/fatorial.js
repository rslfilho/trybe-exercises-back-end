const readline = require('readline-sync');

const getFactorial = () => {
  const number = readline.questionInt('Qual número você quer saber o fatorial? ');
  if(number < 1) {
    console.log('Número Inválido, tente novamente!');
    return getFactorial();
  };

  let result = number;

  for (let index = number - 1; index >= 1; index -= 1) {
    result *= index;
  };

  console.log(result);
};

getFactorial();