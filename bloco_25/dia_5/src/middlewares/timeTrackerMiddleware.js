module.exports = async (req, _res, next) => {
  const responseTime = Date.now() - req.startTime;
  console.log(`Tempo de resposta: ${responseTime}ms\n`);
  next();
};
