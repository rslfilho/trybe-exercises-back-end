module.exports = (req, res) => {
  const { id } = req.params;

  const random = Math.ceil(Math.random() * 5);

  if (+id === random) return res.status(200).json({ post: "Esse é o post" });

  return res.status(404).json({ "message": "post not found" });
};
