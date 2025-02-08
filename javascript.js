let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choice.length);
  return choice[index]; // return choice.at(index) works as well
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose between Rock,Paper,Scissors", "Rock");

  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
}

function playRound(humanChoice, computerChoice) {}

console.log(getComputerChoice());
getHumanChoice();
