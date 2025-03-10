const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

let count = 0;

for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        continue;
    } else if (i % 3 == 0) {
        continue;
    } else if (i % 5 ==0) {
        continue;
    } else {
        count++;
    }
}
console.log(count);