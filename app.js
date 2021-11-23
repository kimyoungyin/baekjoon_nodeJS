const fs = require("fs");
const str = fs.readFileSync("./.txt").toString().trim().toUpperCase();

let maxCount = 0;
let maxStr = "";

for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    const al = String.fromCharCode(i);
    let currentIndex = str.indexOf(al);
    let count = 0;
    if (currentIndex !== -1) {
        count = 1;
        while (currentIndex !== -1) {
            const nextIndex = str.indexOf(al, currentIndex + 1);
            if (nextIndex === -1) break;
            currentIndex = nextIndex;
            count++;
        }
    }
    if (maxCount < count) {
        maxCount = count;
        maxStr = al;
    } else if (maxCount === count) {
        maxStr = "?";
    }
}

console.log(maxStr);
