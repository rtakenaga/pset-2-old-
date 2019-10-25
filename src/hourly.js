const readlineSync = require("readline-sync");

const question = readlineSync.question("\nHourly wage: ");

const mon = readlineSync.question("\nMonday: ");
const tues = readlineSync.question("Tuesday: ");
const wed = readlineSync.question("Wednesday: ");
const thurs = readlineSync.question("Thursday: ");
const fri = readlineSync.question("Friday: ");
const sat = readlineSync.question("Saturday: ");
const sun = readlineSync.question("Sunday: ");

let money = (Number(mon)+Number(tues)+Number(wed)+Number(thurs)+Number(fri)+Number(sat)+Number(sun)) * question
money = money.toFixed(2);
console.log("\nYou'll make $" + money + " this week.")
