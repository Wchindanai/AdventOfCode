const fs = require('fs');
var path = require("path");

const inputFile = fs.readFileSync(path.join(__dirname, 'input')).toString();
let sum = 0, length = 1;
for( let i = 0; i < inputFile.length; i++) {
    if (length !== inputFile.length ) {
        if ( inputFile[i] === inputFile[length]) {
            sum += parseInt(inputFile[i]);
        }
    } else {
        if ( inputFile[inputFile.length - 1] === inputFile[0] ) {
            sum += parseInt(inputFile[0]);
        }
    }
    length++;
}

console.log(sum);

