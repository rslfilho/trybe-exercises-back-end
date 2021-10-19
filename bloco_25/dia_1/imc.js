const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? (Kg) ');
const height = readline.questionInt('Qual sua altura? (Cm) ');

const calculateImc = (w, h) => {
  const heightInMeters = h / 100;

  return (w / (heightInMeters * heightInMeters)).toFixed(2);
};

const IMC = calculateImc(weight, height);

console.log('IMC: '+ IMC);

const getImcResult = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc > 24.9) return 'Peso normal';
  if (imc > 29.9) return 'Acima do peso (sobrepeso)';
  if (imc > 34.9) return 'Obesidade grau I';
  if (imc > 39.9) return 'Obesidade grau II';

  return 'Obesidade grau III e IV';
};

console.log('Situação: ' + getImcResult(IMC));
