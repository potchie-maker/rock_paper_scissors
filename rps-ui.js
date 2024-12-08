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

const choices = {
  rock: "ROCK",
  paper: "PAPER",
  scissors: "SCISSORS",
}

function getHumanChoice(callback) {
  document.querySelector(".rock").addEventListener("click", () => callback(choices.rock));
  document.querySelector(".paper").addEventListener("click", () => callback(choices.paper));
  document.querySelector(".scissors").addEventListener("click", () => callback(choices.scissors));
}


// getHumanChoice((choice) => console.log(choice));

function playRound(humanChoice, humanTotal, computerTotal) {
  let computerChoice = getComputerChoice();
  let humanScore = humanTotal;
  let computerScore = computerTotal;

  if (humanChoice === computerChoice) {
    console.log("You tied. No winners here. Go another round.");
  } else if (
    (humanChoice === "ROCK" && computerChoice === "PAPER") ||
     (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
     (humanChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
     console.log(`You lost. ${computerChoice} beats ${humanChoice}. Go another round.`);
     computerScore++;
  } else {
    console.log(`You WON!!! ${humanChoice} beats ${computerChoice}. Go another round.`);
     humanScore++;
  } 
   // console.log [humanScore, computerScore]
   return [humanScore, computerScore];
}

async function playGame() {
  let result = [0,0];
  let round = 1;
  await getHumanChoice((humanChoice) => {;
    if (result[0] < 5 && result[1] < 5) {
      console.log(`This is round ${round}`);
      result = playRound(humanChoice, result[0], result[1]);
      console.log(result);
      round++;
    }

    let winLimit = result[0] >= 5 || result[1] >= 5;
    let scoreTied = result[0] === result[1];
    let humanWin = result[0] > result[1];
    let computerWin = result[0] < result[1];

    if (winLimit && humanWin) {
      console.log("YOU'VE WON THE MATCH!!!!! Reload the page to play again.");
    } else if (winLimit && scoreTied) {
      console.log("The match ended in a tie. Reload the page to play again.");
    } else if (winLimit && computerWin) {
      console.log("You lost the match. Reload the page to play again.");
    }
  });
}

playGame();