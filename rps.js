function changePlayerChoice(choice) {
  document.getElementById("playerschoice").innerHTML = choice;
  return choice;
}

function getComputerChoice() {
  const arr = ["rock", "paper", "scissors"];
  const computerChoice = arr[Math.floor(Math.random() * arr.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return console.log("Draw! " + (playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1)) + " and " + computerSelection + " is the same.");
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
    return console.log("You win! " + (playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1)) + " beats " + computerSelection);
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    return console.log("You win! " + (playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1)) + " beats " + computerSelection);
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    return console.log("You win! " + (playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1)) + " beats " + computerSelection);
  } else {
    return console.log("You lose! " + (playerSelection.charAt(0).toUpperCase()
    + playerSelection.slice(1)) + " loses to " + computerSelection);
  }
}

document.getElementById("rock").addEventListener("click", function() {
  let playerSelection = changePlayerChoice("rock");
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

document.getElementById("paper").addEventListener("click", function() {
  let playerSelection = changePlayerChoice("paper");
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

document.getElementById("scissors").addEventListener("click", function() {
  let playerSelection = changePlayerChoice("scissors");
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});