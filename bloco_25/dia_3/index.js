const fs = require('fs');

const analiseNumero = (number) => {
  if (number > 0 ) return 'Positivo';
  if (number < 0 ) return 'Negativo';
  if (number === 0) return 'Neutro';

  return 'o valor deve ser um númnero';
};

const escrevendoConteudo = (nome, conteudo) => {
  fs.writeFileSync(nome, conteudo);

  return 'Ok';
};

module.exports = { analiseNumero, escrevendoConteudo };
