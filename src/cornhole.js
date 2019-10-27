const readlineSync = require("readline-sync");

//Numbers
const length = Number(48);
const width = Number(24);
const diameter = Number(6);
const radius = diameter / 2;
const circle_area = (radius * radius * Math.PI);
const board_surface = (length * width);

//Calculations
const final_board = (board_surface - circle_area).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nThe surface area of a standard Cornhole board is " + final_board + " square inch(es).")
