const readlineSync = require("readline-sync");

const Width =  readlineSync.question("Width: ");
const Length = readlineSync.question("Length: ");
const conversion = 25.4;
let w = Width;
let l = Length;
let w2 = Width*conversion;
let l2 = Length*conversion;
let area = w2*l2;

console.log(area);

area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log(area);
