const n = require("fs").readFileSync(0).toString().trim().split("\n");

let count1 = 0;
let count2 = 0;

for (let i = 0; i < 10; i++) {
    if (Number(n[i]) % 3 == 0) {
        count1++;
    }
}
for (let i = 0; i < 10; i++) { 
    if (Number(n[i]) % 5 == 0) {
        count2++;
    } 
}
console.log(count1, count2);