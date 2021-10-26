const getAll = (_req, res) => {
  const random = Math.ceil(Math.random() * 3);
  
  if (random === 2) return res.status(200).json({ posts: [] });

  return res.status(200).json({ posts: ["Sou todos os posts"] });
};

const getById = (req, res) => {
  const { id } = req.params;

  const random = Math.ceil(Math.random() * 5);

  if (+id === random) return res.status(200).json({ post: "Esse é o post" });

  return res.status(404).json({ "message": "post not found" });
};

module.exports = {
  getAll,
  getById,
};
