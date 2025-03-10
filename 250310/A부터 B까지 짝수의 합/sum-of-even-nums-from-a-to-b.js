const input = require("fs").readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

let add = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        add += i;
    }
}
console.log(add);