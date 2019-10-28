const readlineSync = require("readline-sync");

const Width =  readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const conversion = 2.54;
let w = Width;
let l = Length;
let w2 = Width*conversion;
let l2 = Length*conversion;
let perimeter = 2*w2+2*l2;


perimeter = perimeter.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has an perimeter of " + perimeter + " centimeter(s).");
