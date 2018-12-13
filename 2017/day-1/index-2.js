const fs = require("fs");
var path = require("path");

const inputFile = fs.readFileSync(path.join(__dirname, "input-2")).toString();
let sum = 0,
  length = 1,
  halfLength = inputFile.length / 2;
for (let i = 0; i < halfLength; i++) {
    if (inputFile[i] === inputFile[halfLength + i]) {
      sum += parseInt(inputFile[i]) * 2;
    }
}

console.log(sum);
