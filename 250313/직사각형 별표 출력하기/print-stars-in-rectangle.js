const input = require("fs").readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);
let str = "";

for(let j = 0; j < n; j++) {
    str = ""
    for (let i = 0; i < m; i++) {
        str += "* "+ "";
    }
    console.log(str);
}