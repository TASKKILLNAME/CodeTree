const input = require("fs").readFileSync(0).toString().trim();

let n = Number(input);

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
        if (j != n) {
            str += `${i} * ${j} = ${i*j}`+", ";
        }
        else {
            str += `${i} * ${j} = ${i*j}`;
        }
    }
    console.log(str);
}