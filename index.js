const initialState = document.querySelector("#initial-state");
const gameState = document.querySelector("#game-state");
const gameBtns = document.querySelector("#game-btns");
const results = document.querySelector("#results");
const newQuitBtns = document.querySelector("#new-quit-btns");
const overallResults = document.querySelector("#overall-results");
const overallScores = document.querySelector("#overall-scores");

const startButton = document.querySelector("#start-btn");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const quitBtn = document.querySelector("#quit-btn");
const newGameBtn = document.querySelector("#new-btn");

let playerScore = 0;
let computerScore = 0;
let overallScore = {
  player: 0,
  computer: 0,
};

startButton.addEventListener("click", () => startGame());

rockBtn.addEventListener("click", () => playRound("ROCK"));
paperBtn.addEventListener("click", () => playRound("PAPER"));
scissorsBtn.addEventListener("click", () => playRound("SCISSORS"));

quitBtn.addEventListener("click", () => {
  startGame();
  resetGame();
});

newGameBtn.addEventListener("click", () => {
  newGameBtn.classList.toggle("hide");
  gameBtns.classList.toggle("hide");
  quitBtn.classList.toggle("hide");
  resetGame();
});

function playRound(playerSelection) {
  let computerSelection = chooseComputerSelection();

  if (playerSelection === computerSelection) {
    addResult(`Draw! Player: ${playerScore}, Computer: ${computerScore}`);
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    addResult(
      `You win this round! ${playerSelection} beats ${computerSelection}. Player: ${playerScore}, Computer: ${computerScore}`
    );
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS")
  ) {
    computerScore++;
    addResult(
      `You lose this round! ${computerSelection} beats ${playerSelection}. Player: ${playerScore}, Computer: ${computerScore}`
    );
  }

  if (playerScore === 5 || computerScore === 5) {
    gameBtns.classList.toggle("hide");
    quitBtn.classList.toggle("hide");
    newGameBtn.classList.toggle("hide");
    let finalScore = `Final score: ${playerScore} to ${computerScore}`;
    if (playerScore === computerScore) {
      addResult(`We have a tie! ${finalScore}`);
    } else if (playerScore > computerScore) {
      addResult(`You won! Congratulations! ${finalScore}`);
      overallScore.player++;
    } else {
      addResult(`You lost! Better luck next time. ${finalScore}`);
      overallScore.computer++;
    }
    overallResults.classList.remove("hide");
    overallScores.textContent = `Player: ${overallScore.player}, Computer: ${overallScore.computer}`;
  }
}

function chooseComputerSelection() {
  const weapons = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  return weapons[i];
}

function addResult(result) {
  let newResult = document.createElement("p");
  newResult.textContent = result;
  results.appendChild(newResult);
}

function startGame() {
  initialState.classList.toggle("hide");
  gameState.classList.toggle("hide");
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
}
