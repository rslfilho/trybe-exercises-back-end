module.exports = (req, res) => {
  const filesList = req.files
    .map(({ originalname, filename }) => ({
      file: originalname,
      url: `http://localhost:3000/${filename}`,
    }));
  res.status(200).json(filesList);
};
