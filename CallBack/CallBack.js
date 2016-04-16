var fs = require("fs");

var data = fs.readFileSync('TextFile.txt');

console.log(data.toString());
console.log("Program Ended");
