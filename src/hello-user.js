const readlineSync = require("readline-sync");

const name = readlineSync.question("\nHi! What's your name? ");
console.log("Hello, " + name + "!");
