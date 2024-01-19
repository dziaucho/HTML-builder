const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "secret-folder");


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
