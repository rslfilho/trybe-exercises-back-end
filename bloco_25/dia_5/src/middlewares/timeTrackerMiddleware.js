module.exports = async (req, res, next) => {
  const responseTime = Date.now() - req.startTime;

  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} : Tempo de resposta: ${responseTime}ms\n`);
  next();
};
