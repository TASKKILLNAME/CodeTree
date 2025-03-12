const input = require("fs").readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let array = [];

function addArray() {
    array += a;
    array += " ";
}

addArray();


while (a < b) {
    if (a % 2 == 1) {
        a *= 2;
        if (a > b) {
            break;
        }
        addArray();
    } else if (a % 2 == 0) {
        a += 3;
        if (a > b) {
            break;
        }
        addArray();
    }
}
console.log(array);