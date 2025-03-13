const input = require("fs").readFileSync(0).toString().trim();

let n = Number(input);

for (let i = 0; i < 2*n; i++) {
    
    if (i % 2 == 0) {
        let str = "";
        for (let j = -1; j < i; j++) {
            str += "*";
        }
        console.log(str);
    } 
    
}