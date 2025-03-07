const fs = require("fs");
const fs2 = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ");
let aMath = Number(a[0]);
let aEngl = Number(a[1]);

let b = input[1].split(" ");
let bMath = Number(b[0]);
let bEngl = Number(b[1]);

if (aMath > bMath && aEngl > bEngl) {
    console.log("1");
}
else {
    console.log("0");
}
