const fs = require("fs");
const strs = fs
    .readFileSync("./.txt")
    .toString()
    .trim()
    .split(" ")
    .filter((text) => text !== "");

console.log(strs.length);
