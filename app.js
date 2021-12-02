const fs = require("fs");
const [A, B, V] = fs
    .readFileSync("./.txt")
    .toString()
    .trim()
    .split(" ")
    .map((str) => +str);

// 1. A-B만큼 올라가는 걸 몇 번 했을 때 V보다 작을 지 계산
// 2. 그 전에 A만큼 올라갔을 때에 이미 넘었는지 체크
// 3. 안올라갔었다면 몇 번 + 1

// A + (totalDays) - B * (totalDays -1) >= V
// totalDays * (A - B) >= V - B
const totalDays = Math.ceil((V - B) / (A - B));
console.log(totalDays);
