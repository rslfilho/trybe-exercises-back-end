const { exercise1 } = require('./exercise-1');

const main = () => {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);
  
  return exercise1(num1, num2, num3)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
};

main();
