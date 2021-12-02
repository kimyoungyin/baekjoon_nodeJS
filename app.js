const fs = require("fs");
const [N, ...arr] = fs
    .readFileSync("./.txt")
    .toString()
    .trim()
    .split("\n")
    .map((str) => +str);

const homes = [];

for (let index = 0; index < N * 2; index++) {
    if (index % 2) {
        continue;
    }
    const 층수 = arr[index];
    const 호수 = arr[index + 1];
    for (let 층 = 0; 층 <= 층수; 층++) {
        homes[층] = [0];
        for (let 호 = 1; 호 <= 호수; 호++) {
            if (층 === 0) {
                homes[층][호] = 호;
            } else {
                let sum = 0;
                for (let 아래호 = 1; 아래호 <= 호; 아래호++) {
                    sum += homes[층 - 1][아래호];
                }
                homes[층][호] = sum;
            }
        }
    }
    console.log(homes[층수][호수]);
}
