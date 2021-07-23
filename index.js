const read = require("readline-sync");

const questionsList = [
  {
    question: "What is my name ? ",
    answer: "Sushil Pundkar",
  },
  {
    question: "Where do I live ? ",
    answer: "Mumbai",
  },
  {
    question: "Who is my favourite cricketer ? ",
    answer: "M S Dhoni",
  },
  {
    question: "What is my favourite programming language ? ",
    answer: "Python",
  },
  {
    question: "What is my childhood nick name ? ",
    answer: "Kapil",
  },
];

let score = 0;

function game(question, answer) {
  let userAnswer = read.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(`Correct answer `);
  } else {
    console.log(`Oops ! your ans is wrong`);
  }
  console.log(`Your current score is ${score}`);
}

console.log("Welcome to The-Game, HOW MUCH DO YOU KNOW ME !");

let userName = read.question("What is your name ? ");

console.log(`Okay ${userName}, let's begin`);

console.log(
  `the-Game is about how much you know about me !`
);

console.log("--------------------------------------");

for (let item of questionsList) {
  game(item.question, item.answer);
  console.log("--------------------------------------");
}

console.log(
  `Well Done !! ${userName} ! The-Game is completed, your final score is :- ${score}/5`
);
