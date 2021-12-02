const fs = require("fs");
const num = +fs.readFileSync("./.txt").toString().trim();

// 1. 그룹요소 수: 1 + 2 + 3 + 4 증가
// 2. 그룹 별 분모 분자 합: 그룹 요소 수 + 1
// 3. 방향: 그룹 요소수가 짝수면 분자가 점점 증가

let groupNum = 1;

const getSum = (groupNum) => (groupNum * (groupNum + 1)) / 2;
while (true) {
    if (num - getSum(groupNum) <= 0) {
        break;
    }
    groupNum++;
}
const restNum = num - getSum(groupNum - 1);
console.log(
    groupNum % 2
        ? `${groupNum + 1 - restNum}/${restNum}`
        : `${restNum}/${groupNum + 1 - restNum}`
);
