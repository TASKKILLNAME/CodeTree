const input = require("fs").readFileSync(0).toString().trim().split("\n");

let n = 0;

while (true) {
    if (input[n] > 25) {
        n++;
        console.log("Lower");
    }else if (input[n] == 25) {
        n++;
        console.log("Good");
        break;
    } else if (input[n] < 25) {
        n++;
        console.log("Higher");
    } 
}