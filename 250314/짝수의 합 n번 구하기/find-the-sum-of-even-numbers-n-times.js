const input = require("fs").readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let result = 0;
    let a = input[i].split(" ");
    let n1 = Number(a[0]);
    let n2 = Number(a[1]);
    for (let j = n1; j <= n2; j++) {
        if (j % 2 == 0) {
            result += j;
        }
    }
    console.log(result);
}