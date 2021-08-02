let playerScore = 0;
let computerScore = 0;
let result = "";

let abortGame = true;

const weapons = ["rock", "paper", "scissors"];

const startButton = document.querySelector("button");
startButton.addEventListener("click", () => game());

function game() {
  // console.clear();
  abortGame = false;
  while (playerScore < 5 && computerScore < 5 && !abortGame) {
    playRound();
    console.log(result);
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  }
  let finalScore = `Final score: ${playerScore} to ${computerScore}`;
  if (playerScore === computerScore) {
    console.log("We have a tie!", finalScore);
  } else if (playerScore > computerScore) {
    console.warn("You won! Congratulations!", finalScore);
  } else {
    console.error("You lost! Better luck next time.", finalScore);
  }
  resetGame();
}

function playRound() {
  let playerSelection = getInput().toLowerCase();
  let computerSelection = computerChoice();
  if (playerSelection === "quit") {
    abortGame = true;
  } else if (!weapons.includes(playerSelection)) {
    result =
      "Something went wrong. Make sure you enter rock, paper, or scissors!";
    return result;
  } else if (playerSelection === computerSelection) {
    result = "Draw! Try again.";
    return result;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result = "You win! Rock beats scissors.";
    return result;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result = "You win! Scissors beats paper.";
    return result;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result = "You win! Paper beats rock.";
    return result;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "You lose! Paper beats rock.";
    return result;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result = "You lose! Rock beats scissors.";
    return result;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "You lose! Scissors beats paper.";
    return result;
  }
}

function getInput() {
  let input = prompt("Choose your weapon!");
  if (!input) {
    return getInput();
  }
  return input;
}

function computerChoice() {
  let i = Math.floor(Math.random() * 3);
  return weapons[i];
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  result = "";
  abortGame = true;
}
