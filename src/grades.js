const readlineSync = require("readline-sync");


//Homework
const h1 = readlineSync.question("Enter three homework grades.\n");
const h2 = readlineSync.question("");
const h3 = readlineSync.question("");

let h_avg = (Number(h1) + Number(h2) + Number(h3))/3;
let h_w = h_avg * 0.15

//Quizzes
const q1 = readlineSync.question("Enter three quiz grades. \n");
const q2 = readlineSync.question();
const q3 = readlineSync.question();

//Tests
const t1 = readlineSync.question("Enter three test grades. \n");
const t2 = readlineSync.question();
const t3 = readlineSync.question();
