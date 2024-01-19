const fs = require("fs");
const path = require("path");
const pathToFiles = path.join(__dirname, "files-copy");
const pathFromFiles = path.join(__dirname, "files");


function copyDir() {
  fs.mkdir(pathToFiles, { recursive: true }, (err) => {
    fs.readdir(pathFromFiles, (err, files) => {
      files.forEach((file) => {
        fs.appendFile(`${pathToFiles}/${file}`, "", (err) => {
        });
        fs.copyFile(`${pathFromFiles}/${file}`, `${pathToFiles}/${file}`, (err) => {
        });
      })
    })
  });
}

copyDir()