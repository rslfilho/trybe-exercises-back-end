const fs = require('fs').promises;


const createAndReadFiles = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  try {
    const filesPromises = strings.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
    await Promise.all(filesPromises);

    const files = [
      'file1.txt',
      'file2.txt',
      'file3.txt',
      'file4.txt',
      'file5.txt',
    ];

    const filesContent = await Promise.all(files.map((file) => fs.readFile(file, 'utf-8')));

    fs.writeFile('./fileAll.txt', filesContent.join(' '));

    const fileAll = await fs.readFile('fileAll.txt', "utf-8");
  } catch (err) {
    console.log(err.message);
  };
};

createAndReadFiles();
