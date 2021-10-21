const readline = require('readline-sync');
const fs = require('fs').promises;

const main = async () => {
  try{
    const file = readline.question('Qual arquivo você quer ler? ');
    const content = await fs.readFile(file, 'utf-8');
    const wordToTake = readline.question('Que palavra será substituída? ');
    const wordToReplace = readline.question('Que palavra vai ocupar o lugar? ');
    const newContent = content.replace(new RegExp(wordToTake, 'gi'), wordToReplace);
    console.log(newContent);
    const newFileName = readline.question('Qual o nome do novo arquivo? ');
    await fs.writeFile(`./${newFileName}`, newContent);
  } catch (err) {
      console.log('Arquivo não existe, erro: ', err.message);
  };
};

main();
