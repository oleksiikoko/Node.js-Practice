import { readline } from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?`, userInput => {
  if (userInput == answer) {
    console.log("You are right!");
  } else {
    console.log("Not correct(");
  }
});

// const fs = require("fs");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("data: ", data);
// });

// const Cat = require("./cat");

// const cat = new Cat();
// console.log(cat.makeSound());
