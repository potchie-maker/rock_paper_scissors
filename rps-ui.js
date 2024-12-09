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

function updateRound(message) {
  let round = document.querySelector(".round");
  round.textContent = message;
}

function updateResult(message) {
  let results = document.querySelector(".results");
  results.textContent = message;
}

function updateScore(humanMessage, computerMessage) {
  let humanScore = document.querySelector(".humanScore");
  let computerScore = document.querySelector(".computerScore");
  humanScore.textContent = humanMessage;
  computerScore.textContent = computerMessage;
}

function updateWinner(message) {
  let winner = document.querySelector(".winner");
  winner.textContent = message;
}

function playRound(humanChoice, humanTotal, computerTotal) {
  let computerChoice = getComputerChoice();
  let humanScore = humanTotal;
  let computerScore = computerTotal;
  let message = "";

  if (humanChoice === computerChoice) {
    message = "You tied. No winners here. Go another round."
    updateResult(message);
    console.log("You tied. No winners here. Go another round.");
  } else if (
    (humanChoice === "ROCK" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (humanChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
    message = `You lost. ${computerChoice} beats ${humanChoice}. Go another round.`
    updateResult(message);
    console.log(`You lost. ${computerChoice} beats ${humanChoice}. Go another round.`);
    computerScore++;
  } else {
    message = `You WON!!! ${humanChoice} beats ${computerChoice}. Go another round.`
    updateResult(message);
    console.log(`You WON!!! ${humanChoice} beats ${computerChoice}. Go another round.`);
    humanScore++;
  } 
   return [humanScore, computerScore];
}

function playGame() {
  let result = [0,0];
  let round = 1;
  const winLimit = 5;
  let winnerMessage = "";
  let roundMessage = "";
  let humanScoreMessage = "";
  let computerScoreMessage = "";

  function endGame() {
    if (result[0] === result[1]) {
      winnerMessage = "The match ended in a tie. Reload the page to play again.";
      updateWinner(winnerMessage);
      console.log("The match ended in a tie. Reload the page to play again.");
    } else if (result[0] === winLimit) {
      winnerMessage = "YOU'VE WON THE MATCH!!!!! Reload the page to play again.";
      updateWinner(winnerMessage);
      console.log("YOU'VE WON THE MATCH!!!!! Reload the page to play again.");
    } else if (result[1] === winLimit) {
      winnerMessage = "You lost the match. Reload the page to play again.";
      updateWinner(winnerMessage);
      console.log("You lost the match. Reload the page to play again.");
    }

    document.querySelectorAll(".rock, .paper, .scissors").forEach((button) => {
      const newButton = button.cloneNode(true);
      button.replaceWith(newButton);
    });
  }
  
  getHumanChoice((humanChoice) => {;
    if (result[0] < winLimit && result[1] < winLimit) {
      roundMessage = `Round ${round}`
      updateRound(roundMessage);
      console.log(`Round ${round}`);
      result = playRound(humanChoice, result[0], result[1]);
      humanScoreMessage = `YOU: ${result[0]}`;
      computerScoreMessage = `COMPUTER: ${result[1]}`;
      updateScore(humanScoreMessage, computerScoreMessage);
      console.log(result);
      round++;

      if (result[0] === winLimit || result[1] === winLimit) {
        endGame();
      }
    }
  });
}

playGame();