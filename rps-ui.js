const choices = {
  rock: "ROCK",
  paper: "PAPER",
  scissors: "SCISSORS",
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  return Object.values(choices)[rand];
}

function getHumanChoice(callback) {
  document.querySelector(".rock").addEventListener("click", () => callback(choices.rock));
  document.querySelector(".paper").addEventListener("click", () => callback(choices.paper));
  document.querySelector(".scissors").addEventListener("click", () => callback(choices.scissors));
}

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
   return [humanScore, computerScore];
}

function playGame() {
  let result = [0,0];
  let round = 1;
  const winLimit = 5;

  function endGame() {
    if (result[0] === result[1]) {
      console.log("The match ended in a tie. Reload the page to play again.");
    } else if (result[0] === winLimit) {
      console.log("YOU'VE WON THE MATCH!!!!! Reload the page to play again.");
    } else if (result[1] === winLimit) {
      console.log("You lost the match. Reload the page to play again.");
    }

    document.querySelectorAll(".rock, .paper, .scissors").forEach((button) => {
      const newButton = button.cloneNode(true);
      button.replaceWith(newButton);
    });
  }
  
  getHumanChoice((humanChoice) => {;
    if (result[0] < winLimit && result[1] < winLimit) {
      console.log(`This is round ${round}`);
      result = playRound(humanChoice, result[0], result[1]);
      console.log(result);
      round++;

      if (result[0] === winLimit || result[1] === winLimit) {
        endGame();
      }
    }
  });
}

playGame();