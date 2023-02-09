// Client-side Technologies
// JavaScript Fundamentals

// 1. Basics
// 1.1. Ask the user to enter a message then display it using the different
// html heading tags (from <h1> to <h6>) using Loops. DO NOT write the
// header element explicitly in your script!
document.write("_".repeat(20) + "Task_part1" + "_".repeat(20));
let count = 7;
for (let i = 1; i < count; i++) {
  let elementmain = document.createElement(`h${i}`);

  let text = document.createTextNode(`this is header number ${i}`);

  elementmain.appendChild(text);
  document.body.appendChild(elementmain);
}
////////////////////
//1.2. Write a script that takes from the user n values and returns their
// sum, stop receiving values from user when he enters 0 or sum exceeds
// 100, check that the entered data is numeric and inform the user with
// the total sum of the entered values.
document.write("_".repeat(20) + "Task_part2" + "_".repeat(20) + "<br/>");

let result = 0;
for (let i = 0; i < 10; i++) {
  let the_prompt = prompt("Enter number you want to calculator");
  result += Number(the_prompt);

  if (Number(the_prompt) === 0 || result > 100) {
    break;
  }
}

document.write(`Sum Calculator => ${result}`);
