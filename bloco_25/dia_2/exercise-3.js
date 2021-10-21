const { exercise1 } = require('./exercise-1');

const main = async () => {
  try {
    const num1 = Math.floor(Math.random() * 100 + 1);
    const num2 = Math.floor(Math.random() * 100 + 1);
    const num3 = Math.floor(Math.random() * 100 + 1); 

    const result = await exercise1(num1, num2, num3);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  };
};

main();
