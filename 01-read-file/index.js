const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "text.txt");
const stream = new fs.ReadStream(pathFile, "utf-8");

stream.on("readable", function () {
  let data = stream.read();
  if (data != null) {
    console.log(data);
  }
})