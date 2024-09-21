function getComputerChoice() {
  let rand = Math.floor(Math.random() * 9) + 1;
  let choice = "";
  console.log(rand);
  if (rand >= 1 && rand <= 3) {
    choice = "ROCK"
  } else if (rand >= 4 && rand <= 6) {
    choice = "PAPER"
  } else if (rand >= 7 && rand <= 9) {
    choice = "SCISSORS"
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Make your choice!").toUpperCase();
  // console.log(choice);
  if (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
    alert("Choice is invalid, please try again");
    getHumanChoice();
  } else {
    // console.log(choice);
    return choice;
  }
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
}