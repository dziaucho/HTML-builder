const fs = require("fs");
const path = require("path");
const readline = require("readline");
const pathFile = path.join(__dirname, "text.txt");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wrtStream = fs.createWriteStream(pathFile, "utf-8");

function ask(question) {
  rl.question(question, (answer) => {
    if (answer === "exit") {
      console.log("beep-beep!");
      process.exit();
    }
    wrtStream.write(answer + "\n");
    ask(question);
  })
}

ask("vroom?..\n")