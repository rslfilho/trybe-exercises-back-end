const readline = require('readline-sync');

const getFibonacci = () => {
  const number = readline.questionInt('Quantos números da sequência de Fibonacci exibir? ');
  
  if(number < 1) {
    console.log('Número inválido, escolha um número maior que 0!');
    return getFibonacci();
  };

  let fibonacci = [1];

  for (let index = 1; index <= number - 1; index += 1) {
    if(index < 2) {
      fibonacci.push(index);
    } else {
      fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2]);
    };
  };

  console.log(fibonacci);
};

getFibonacci();
