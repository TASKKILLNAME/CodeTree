const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let a = input[1].split(" ");

let array = [];

 for (let i = 0; i < n; i++) {
    let value = Number(a[i]);
    value = value * value;
     array += value;
     array += " ";
 } 
 console.log(array);