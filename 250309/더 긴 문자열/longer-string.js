const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const text1 = input[0];
const text2 = input[1];

const text1length = input[0].length;
const text2length = input[1].length;

if (text1length == text2length) {
    console.log("same");
} else if (text1length > text2length) {
    console.log(text1,text1length);
} else if (text2length > text1length) {
    console.log(text2, text2length);
}