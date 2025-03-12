const input = require("fs").readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let array = [];

while (a < b) {
    if (a % 2 == 1) {
        a *= 2;
        if (a > b) {
            break;
        }
        array += a;
        array += " ";
    } else if (a % 2 == 0) {
        a += 3;
        if (a > b) {
            break;
        }
        array += a;
        array += " ";
    }
}
console.log(input[0], array);