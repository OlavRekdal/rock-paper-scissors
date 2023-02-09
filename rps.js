function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors']
    const computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return console.log("Draw " + playerSelection + " and " + computerSelection);  
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return console.log("You win " + playerSelection + " and " + computerSelection); 
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return console.log("You win " + playerSelection + " and " + computerSelection); 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return console.log("You win " + playerSelection + " and " + computerSelection); 
    } else {
        return console.log("You lose " + playerSelection + " and " + computerSelection); 
    }
}
   
const playerSelection = "scissors";
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
     }
}

game(); 
