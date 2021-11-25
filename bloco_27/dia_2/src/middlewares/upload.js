const multer = require('multer');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../../uploads');

const fileFilter = (_req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    return callback({ statusCode: 403, message: 'Extension must be `png`' });
  }

  const files = fs.readdirSync(directoryPath);

  if (files.some((element) => element.split('-')[1] === file.originalname)) {
    return callback({ statusCode: 409, message: 'File already exists' });
  }

  callback(null, true);
}

const storage = multer.diskStorage({
  destination: (_req, file, callback) => { file.originalname; callback(null, 'uploads') },
  filename: (_req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`) },
});

module.exports = multer({ storage, fileFilter });