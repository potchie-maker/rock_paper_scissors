function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  console.log(rand);
  if (rand === 1) {
    choice = "ROCK"
  } else if (rand === 2) {
    choice = "PAPER"
  } else if (rand === 3) {
    choice = "SCISSORS"
  }
  return choice;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function getHumanChoice(callback) {
  rock.addEventListener("click", () => callback("ROCK"));
  paper.addEventListener("click", () => callback("PAPER"));
  scissors.addEventListener("click", () => callback("SCISSORS"));
}

// getHumanChoice((choice) => console.log(choice));

function playRound() {
  getHumanChoice((humanChoice) => {
    let computerChoice = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
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
  });
}

function playGame() {
  let result = [0,0];
  let round = 1;
  while (result[0] < 5 && result[1] < 5) {
    result = playRound();
    console.log(`This is round ${round}`);
    round++;
  }

  if (result[0] > result[1]) {
    console.log("YOU'VE WON THE MATCH!!!!! Reload the page to play again.");
  } else if (result[0] === result[1]) {
    console.log("The match ended in a tie. Reload the page to play again.");
  } else {
    console.log("You lost the match. Reload the page to play again.");
  }
}

playGame();