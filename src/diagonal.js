const readlineSync = require("readline-sync");

const Width =  readlineSync.question("Width: ");
const Length = readlineSync.question("Length: ");
let w = Width;
let l = Length;
let w2 = Math.pow(w,2);
let l2 = Math.pow(l,2);
let sum = w2 + l2;
let diagonal = Math.sqrt(sum);


diagonal = diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has a idagonal of " + diagonal + " inch(s).");
