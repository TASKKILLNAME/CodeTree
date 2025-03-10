const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

for (let i = 1; i < n; i++) {
    if (i < n - i) {
        continue;
    } else if (i >= n - i) {
        console.log(i);
        break;
    }
}        
