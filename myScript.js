let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerRound = Math.floor(Math.random()) * 3;
  if (computerRound == 1) {
    return "rock";
  } else if (computerRound == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanRound = prompt("Rock, Paper or Scissors? ").toLowerCase();
  if (humanRound == "rock") {
    return "rock";
  } else if (humanRound == "paper") {
    return "paper";
  } else if (humanRound == "scissors") {
    return "scissors";
  } else {
    alert("enter 'rock, paper or scissors'");
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
console.log(computerSelection);
console.log(humanSelection);

function playRound(computerSelection, humanSelection) {
  if (
    (computerSelection == "paper" && humanSelection == "rock") ||
    (computerSelection == "scissors" && humanSelection == "paper") ||
    (computerSelection == "rock" && humanSelection == "scissor")
  ) {
    return `You lose ${computerSelection} beats ${humanSelection}`;
  } else if (computerSelection === humanSelection) {
    return `Draw`;
  } else return `You win`;
}

console.log(playRound(computerSelection, humanSelection));
