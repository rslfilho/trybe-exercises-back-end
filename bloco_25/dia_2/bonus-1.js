const readline = require('readline-sync');
const fs = require('fs').promises;

const main = async () => {
  try {
    const file = readline.question('Qual arquivo você quer ler? ');
  
    const content = await fs.readFile(file, 'utf-8');
  
    console.log(content);

  } catch (err) {
    console.log('Arquivo inexistente');
  }
};

main();
