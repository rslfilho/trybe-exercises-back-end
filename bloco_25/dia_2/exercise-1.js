const exercise1 = async (num1, num2, num3) => {
  return new Promise((resolves, rejects) => {
    if (
      typeof num1 !== 'number'
      || typeof num2 !== 'number'
      || typeof num3 !== 'number'
    ) rejects('Informe apenas números');

    const result = (num1 + num2) * num3;

    if (result < 50) rejects(new Error('Valor muito baixo'));

    resolves(result);
  });
};

module.exports = { exercise1 };
