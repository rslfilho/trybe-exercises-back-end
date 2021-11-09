module.exports = (req, _res, next) => {
  req.startTime = Date.now();
  
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} : ${req.method} ${req.path}`);

  next()
};
