const readlineSync = require("readline-sync");

const sal = Number(readlineSync.question("\nAnnual salary: "));

const pre_tax= 0.07;
const fed = 0.157;
const state = 0.0447;
const social = 0.062;
const med = 0.0145;

const salary = sal * (1-pre_tax);
let tax = fed + state + social + med;
let duc2 = (1-tax) * salary;
let take_home = duc2/24;



take_home = take_home.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour take-home pay each check will be $" + take_home + ".");
