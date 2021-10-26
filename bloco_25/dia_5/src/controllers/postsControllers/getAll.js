module.exports = (_req, res) => {
  const random = Math.ceil(Math.random() * 3);
  
  if (random === 2) return res.status(200).json({ posts: [] });

  return res.status(200).json({ posts: ["Sou todos os posts"] });
};
