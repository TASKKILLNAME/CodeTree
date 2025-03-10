const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let array = [];
let result = [];

array = input[1].split(" ");

for (let i = 0; i < n; i++) {
    if (array[i] % 2 ==0 ) {
        result.push(array[i]);
    }

}
console.log(result.reverse().join(" "));