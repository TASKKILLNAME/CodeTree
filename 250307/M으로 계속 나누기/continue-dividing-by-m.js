const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = arr[0];
let m = arr[1];

// Please write your code here.
console.log(n);
while (n > 0) {
    n = parseInt(n / m);
    if (n == 0) {
        break;
    }    
    console.log(n);
}