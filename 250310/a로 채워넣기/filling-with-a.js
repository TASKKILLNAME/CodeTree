const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let text = input;
const end2element = text.length - 2;

let chars = text.split('');

chars[1] = "a";
chars[end2element] = "a";

text = chars.join('');

console.log(text);