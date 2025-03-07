const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let year = Number(input);

if (year % 4 == 0 && year % 100 !== 0) {
    console.log("true");
} else if (year % 100 ==0 && year % 400 !== 0) {
    console.log("fae");
}

