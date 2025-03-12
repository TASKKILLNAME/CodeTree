const input = require("fs").readFileSync(0).toString().trim().split("\n");
let count = 0;

while (true) {
    console.log(input[count]);
    count++;
    if (input[count] == 0) {
        break;
    } 
}