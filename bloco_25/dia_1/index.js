const readline = require('readline-sync');

const scripts = [
  { name: 'IMC', script: './imc.js' },
  { name: 'Sorteio', script: './sorteio.js' },
  { name: 'Velocidade', script: './velocidade.js' },
  { name: 'Fatorial', script: './fatorial.js' },
  { name: 'Fibonacci', script: './fibonacci.js' },
];

const chooseScript = () => {
  const nameList = scripts.map(({ name }) => name);
  const selectedScript = readline.keyInSelect(
    nameList,
    'Qual script você deseja executar? ',
    { cancel: 'SAIR' },
  );
  return selectedScript;
};

const runScript = () => {
  const scriptIndex = chooseScript();

  if (scriptIndex === -1) {
    console.log('Até mais!');
    return
  };

  const { script } = scripts.find((_item, index) => index === scriptIndex);

  require(script);
};

runScript();