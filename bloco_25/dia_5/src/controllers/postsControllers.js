const getAll = (_req, res, next) => {
  const random = Math.ceil(Math.random() * 3);
  
  if (random === 2) {
    res.status(200).json({ posts: [] });
    return next();
  };

  res.status(200).json({ posts: ["Sou todos os posts"] });
  return next();
};

const getById = (req, res, next) => {
  const { id } = req.params;

  if (+id === 2) throw new Error('Testando handler de erro')

  const random = Math.ceil(Math.random() * 3);

  if (+id === random) {
    res.status(200).json({ post: "Esse é o post" });
    return next();
  } 

  res.status(404).json({ "message": "post not found" });
  return next();
};

module.exports = {
  getAll,
  getById,
};
