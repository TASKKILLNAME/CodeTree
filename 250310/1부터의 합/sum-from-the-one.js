const n = Number(require("fs").readFileSync(0).toString());

let cnt = 1;
let prod = 1;

for (let i = 0; i < n; i++) {
    cnt++;
    prod += cnt;
    if (prod < n) {
        continue;
    } else if (prod >= n) {
        break;
    }
}

console.log(cnt);