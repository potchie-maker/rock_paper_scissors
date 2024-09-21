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