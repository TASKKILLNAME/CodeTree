const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const result = [];
let score = Number(input);

for (let i = score; i <= 100; i++) {

    if (i < 60) {
        result.push("F");
    } else if (i < 70) {
        result.push("D");
    } else if (i < 80) {
        result.push("C");
    } else if (i < 90) {
        result.push("B");
    } else {
        result.push("A");
    }
}

console.log(result.join(" "));