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

/*const wrtStream = fs.createWriteStream(pathFile, "utf-8");

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

ask("vroom?..\n") */

/*
fs.readdir(pathFile, (err, files) => {

  files.forEach((file) => {

    let fileList = file.split('.');
    let elemLine = "";

    fs.stat(pathFile + `/${file}`, (err, stats) => {

      fileSize = Math.round((stats.size) / 1024);

      fileList.forEach((element) => {
        if (element !== "image" && element !== "jpg") {
          elemLine += element;
          elemLine += " - ";
        }
      });
      if (elemLine !== "") {
        console.log(`${elemLine}${fileSize}kb`);
      }
    });

  });

});
*/