const fs = require("fs");
var path = require("path");

const inputFile = fs
  .readFileSync(path.join(__dirname, "input"))
  .toString()
  .split("\n");
console.log(inputFile);
let sum = 0;
inputFile.forEach(value => {
  const readLine = value.split(/\t/g);
  for (let i = 0; i < readLine.length; i++) {
    for (let j = 0; j < readLine.length; j++) {
      if (readLine[i] % readLine[j] == 0 && i != j) {
        const result = readLine[i] / readLine[j];
        sum += result;
      }
    }
  }
});

console.log(sum);
