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
  console.log(readLine);
  let max = 0,
    min = 0;
  max = Math.max(...readLine);
  min = Math.min(...readLine);
  sum += max - min;
});

console.log(sum);
