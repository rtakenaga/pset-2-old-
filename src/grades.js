const readlineSync = require("readline-sync");


//Homework
const h1 = readlineSync.question("\nEnter three homework grades.\n");
const h2 = readlineSync.question("");
const h3 = readlineSync.question("");

let h_avg = (Number(h1) + Number(h2) + Number(h3))/3;
let h_w = h_avg * 0.15;

//Quizzes
const q1 = readlineSync.question("\nEnter three quiz grades. \n");
const q2 = readlineSync.question();
const q3 = readlineSync.question();

let q_avg = (Number(q1) + Number(q2) + Number(q3))/3;
let q_w = q_avg * 0.35;

//Tests
const t1 = readlineSync.question("\nEnter three test grades. \n");
const t2 = readlineSync.question();
const t3 = readlineSync.question();

let t_avg = (Number(t1) + Number(t2) + Number(t3))/3;
let t_w = t_avg * 0.50;
let class_grade = h_w + q_w + t_w;
class_grade = class_grade.toFixed(2);
console.log("\nYour marking period grade is " + class_grade +"%.");
