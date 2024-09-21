function getComputerChoice() {
  let rand = Math.floor(Math.random() * 9) + 1;
  let choice = "";
  // console.log(rand);
  if (rand >= 1 && rand <= 3) {
    choice = "ROCK"
  } else if (rand >= 4 && rand <= 6) {
    choice = "PAPER"
  } else if (rand >= 7 && rand <= 9) {
    choice = "SCISSORS"
  }
  return choice;
}

// function getHumanChoice() {
//   let choice = prompt("Make your choice!").toUpperCase();
//   // console.log(choice);
//   if (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
//     alert("Choice is invalid, please try again");
//     // getHumanChoice();
//   // } else {
//     // console.log(choice);
//     // return choice;
//   }
//   return choice;
// }

// function getHumanChoice() {
//   // let choice = "";
//   // while (choice === true) {
//   // console.log(choice);
//   if (prompt("Make your choice!").toUpperCase() != "ROCK" && prompt("Make your choice!").toUpperCase() != "PAPER" && prompt("Make your choice!").toUpperCase() != "SCISSORS") {
//     alert("Choice is invalid, please try again");
//   }
//   return prompt("Make your choice!").toUpperCase();
// }
// }

// function getHumanChoice() {
//   let choice = prompt("Make your choice!").toUpperCase();
//   let valid = false;
//   // console.log(choice);
//   while (valid) {
//     if (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
//       alert("Choice is invalid, please try again");
//       choice = choice;
//     } else {
//       valid === true;
//     }
//   }
//   return choice;
// }

function getHumanChoice() {
  let choice = prompt("Make your choice!").toUpperCase();
  while (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") { // This works with "while" or "if" and I'm not sure why.
    alert("Choice is invalid, please try again");
    choice = getHumanChoice();
    // console.log(choice); // This one adds more console logs if the string doesn't match the first time.
  }
  // console.log(choice); // If the prompt is invalid the first time, it will log the same value twice when exiting the statement.
  return choice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("You tied. No winners here. Go another round.");
  } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    console.log("You lost. Paper beats rock. Go another round.");
    computerScore += 1;
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You WON!!! Rock beats scissors. Go another round.");
    humanScore += 1;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You WON!!! Paper beats rock. Go another round.");
    humanScore += 1;
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    console.log("You lost. Scissors beats paper. Go another round.");
    computerScore += 1;
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    console.log("You lost. Rock beats scissors. Go another round.");
    computerScore += 1;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You WON!!! Scissors beats paper. Go another round.");
    humanScore += 1;
  }
  // console.log [humanScore, computerScore]
  return [humanScore, computerScore];
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

// playRound(humanSelection, computerSelection);

function playGame() {
  let round = 1;
  let result = [];
  // for (let i = 0; i < 5; i++) {
  while (round <= 5) {
    // if (getHumanChoice === false) {
    //   round = round;
    // } else {
    console.log(`This is round ${round}`);
    result = playRound(humanSelection(), computerSelection());
    round++;
  }
    // console.log(round);
  // }
  console.log("------------------------------------------------------------");
  if (result[0] > result[1]) {
    console.log("YOU'VE WON THE MATCH!!!!! Reload the page to play again.");
  } else if (result[0] === result[1]) {
    console.log("The match ended in a tie. Reload the page to play again.");
  } else {
    console.log("You lost the match. Reload the page to play again.");
  }
  // console.log(result);
}

playGame();