const fs = require("fs");
const path = require("path");
const pathToFiles = path.join(__dirname, "project-dist");
const pathFromFiles = path.join(__dirname, "styles");

fs.readdir(pathFromFiles, (err, files) => {
  files.forEach((file) => {
    if (file.endsWith(".css")) {
      fs.readFile(`${pathFromFiles}/${file}`, (err, data) => {
        fs.appendFile(`${pathToFiles}/bundle.css`, data.toString(), (err) => { });
      });
    };
  });
});