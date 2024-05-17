let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerRound = Math.floor(Math.random() * 3);
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

function playRound() {
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();
  console.log(`Computer: ${computerSelection}`);
  console.log(`You chose: ${humanSelection}`);
  if (
    (computerSelection == "paper" && humanSelection == "rock") ||
    (computerSelection == "scissors" && humanSelection == "paper") ||
    (computerSelection == "rock" && humanSelection == "scissor")
  ) {
    console.log(`You lose ${computerSelection} beats ${humanSelection}`);
    computerScore++;
  } else if (computerSelection === humanSelection) {
    console.log(`Draw`);
  } else console.log(`You win ${humanSelection} beats ${computerSelection}`);
  humanScore++;
}

function playGame() {
  let i = 0;
  while (i < 5) {
    i++;
    playRound();
  }
}

function winner() {
  if (humanScore < computerScore) {
    console.log(
      `Computer is the winner. Computer score: ${computerScore} Player: ${humanScore}`
    );
  } else
    console.log(
      `You are the winner. Computer score: ${computerScore} Player: ${humanScore}`
    );
}

playGame();
winner();
