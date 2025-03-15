const input = Number(require("fs").readFileSync(0).toString().trim());
let lastValue = 0; // 이전 줄의 마지막 j값을 저장할 변수

for(let i = 1; i <= input; i++) {
    let str = "";
    for(let j = 1; j <= i; j++) {
        lastValue++; // 이전 마지막 값에서 계속 증가
        str += lastValue + " ";
    }
    console.log(str);
}