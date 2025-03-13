const input = require("fs").readFileSync(0).toString().trim();

let n = Number(input);

for (let i = n; i > 0; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "*"+" "
    }
    console.log(str);
}