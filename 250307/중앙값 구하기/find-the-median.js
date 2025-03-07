const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (b < a || c < a) {
    if (a < b || a < c) {
        console.log(a);
    }
}
if (a < b || c < b) {
    if (b < a || b < c) {
        console.log(b);
    }
}
if (a < c || b < c) {
    if (c < a || c < b) {
        console.log(c);
    }
}