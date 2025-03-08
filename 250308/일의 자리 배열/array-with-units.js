const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let array = [];
array[0] = Number(input[0]);
array[1] = Number(input[1]);

// 다음 8개 수를 계산
for (let i = 0; i < 8; i++) {
  array[i+2] = (array[i] + array[i+1]) % 10;  // 합의 일의 자리만 저장
}

console.log(array.join(" "));  // 배열을 공백으로 구분하여 출력