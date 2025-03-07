const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let array = [];

for (let i = 9; i >= 0; i--) {
    array += input[i]
}
console.log(array);