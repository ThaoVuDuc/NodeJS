var fs = require("fs");
var data = fs.readFileSync("./hello.txt");
console.log(data);
console.log(data.toJSON());
console.log(data.toString());
console.log("read success");
//
var number = fs.readFileSync("./input.txt");
console.log(number.toString());