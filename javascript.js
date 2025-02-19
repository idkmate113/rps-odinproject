let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let results = document.querySelector("#results");

let displayingScoreHuman = document.createElement("div");
let displayingScoreComputer = document.createElement("div");
let winnerOfGame = document.createElement("div");
let containerWinner = document.createElement("div");
let restartButton = document.createElement("button");
let restartButtonContainer = document.createElement("div");

restartButtonContainer.classList.add("restartContainer");
containerWinner.classList.add("containerWinner");
winnerOfGame.classList.add("containerGame");

containerWinner.appendChild(displayingScoreHuman);
containerWinner.appendChild(displayingScoreComputer);

results.appendChild(containerWinner);

displayingScoreComputer.textContent = `Computer Score: `;
displayingScoreHuman.textContent = `Human Score: `;

restartButton.textContent = "Restart";
results.appendChild(winnerOfGame);

restartButtonContainer.appendChild(restartButton);
results.appendChild(restartButtonContainer);

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choice.length);
  return choice[index]; // return choice.at(index) works as well
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      displayingScoreHuman.textContent = `Human Score: ${++humanScore}`;
    }
    if (
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
      (computerChoice === "Paper" && humanChoice === "Rock") ||
      (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
      displayingScoreComputer.textContent = `Computer Score: ${++computerScore}`;
    }
    if (humanChoice === computerChoice) {
      displayingScoreComputer.textContent = `Computer Score: ${++computerScore}`;
      displayingScoreHuman.textContent = `Human Score: ${++humanScore}`;
    }
    if (humanScore > computerScore && humanScore === 5) {
      winnerOfGame.textContent = `You Win The Game!`;
      disableButtons();
    } else if (computerScore > humanScore && computerScore === 5) {
      winnerOfGame.textContent = `You Lose The Game!!`;
      disableButtons();
    } else if (humanScore === 5 && computerScore === 5) {
      winnerOfGame.textContent = `It's a Draw!! Nobody Wins The Game!`;
      disableButtons();
    }
  }
  rock.addEventListener("click", () => {
    let humanChoice = "Rock";
    playRound(humanChoice, getComputerChoice());
  });

  paper.addEventListener("click", () => {
    let humanChoice = "Paper";
    playRound(humanChoice, getComputerChoice());
  });

  scissors.addEventListener("click", () => {
    let humanChoice = "Scissors";
    playRound(humanChoice, getComputerChoice());
  });

  restartButton.addEventListener("click", () => {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    humanScore = 0;
    computerScore = 0;

    displayingScoreHuman.textContent = `Human Score:`;
    displayingScoreComputer.textContent = `Computer Score:`;
    winnerOfGame.textContent = "";
  });
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

playGame();
