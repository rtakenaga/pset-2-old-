const readlineSync = require("readline-sync");

//Questions
const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const bus_capacity = Number(readlineSync.question("Bus capacity: "));

let total = (students + teachers);
let bus_numbers = Math.floor((total/bus_capacity) + 1);

console.log("\n" + bus_numbers + " bus(es) is (are) needed, with " + (total % bus_capacity) + " passenger(s) on the last bus.");
