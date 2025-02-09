function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choice.length);
  return choice[index]; // return choice.at(index) works as well
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose between Rock,Paper,Scissors", "Rock");
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
  return humanChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      console.log(`Gratz, You Win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Human Score Is: ${++humanScore}`);
    }
    if (
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
      (computerChoice === "Paper" && humanChoice === "Rock") ||
      (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
      console.log(`Sadge, You Lose! ${computerChoice} beats ${humanChoice}`);
      console.log(`Computer Score Is: ${++computerScore}`);
    }
    if (humanChoice === computerChoice) {
      console.log(`It's a draw. Nobody wins. ${humanChoice}-${computerChoice}`);
      console.log(
        `Player Score Is: ${++humanScore} - Computer Score Is: ${++computerScore}`
      );
    }
  }
  let playTheRound = playRound(humanSelection, computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame();
playGame();
