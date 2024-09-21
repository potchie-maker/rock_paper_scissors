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

const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


function playRound(humanSelection, computerSelection) {
}