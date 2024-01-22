const fs = require("fs");
const path = require("path");
const pathComp = path.join(__dirname, "components");

const pathToSyles = path.join(__dirname, "project-dist");
const pathFromStyles = path.join(__dirname, "styles");

const pathToCopy = path.join(pathToSyles, "assets");
const pathFromCopy = path.join(__dirname, "assets");

function copyDir() {

  fs.mkdir(pathToCopy, { recursive: true }, (err) => {

    fs.readdir(pathFromCopy, (err, files) => {

      files.forEach((file) => {

        fs.mkdir(`${pathToCopy}/${file}`, { recursive: true }, (err) => {
        });

        fs.readdir(`${pathFromCopy}/${file}`, (err, filesIn) => {

          fs.copyFile(`${pathFromCopy}/${file}/${filesIn}`, `${pathToCopy}/${file}/${filesIn}`, err => {
            console.log(filesIn);
          })
        })

      });

    });

  });

};

copyDir()

fs.readdir(pathFromStyles, (err, files) => {
  files.forEach((file) => {
    if (file.endsWith(".css")) {
      fs.readFile(`${pathFromStyles}/${file}`, (err, data) => {
        fs.appendFile(`${pathToSyles}/styles.css`, data.toString(), (err) => { });
      });
    };
  });
});

let newDataHead;
let newDataArt;
let newDataFoot;

fs.mkdir(`${__dirname}/project-dist`, { recursive: true }, err => {
  fs.readFile(`${__dirname}/template.html`, (err, data) => {

    fs.readFile(`${pathComp}/header.html`, (err, headFiles) => {
      newDataHead = data.toString().replace("{{header}}", headFiles);

      fs.readFile(`${pathComp}/articles.html`, (err, artFiles) => {
        newDataArt = newDataHead.replace("{{articles}}", artFiles);

        fs.readFile(`${pathComp}/footer.html`, (err, footFiles) => {
          newDataFoot = newDataArt.replace("{{footer}}", footFiles);
          fs.writeFile(`${__dirname}/template.html`, newDataFoot, err => { })
        });
      });
    });

  });

});