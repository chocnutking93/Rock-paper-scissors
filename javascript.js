
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

function computerPlay() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
    let choice = ['rock', 'paper', 'scissors']
    return choice;
}

function playRound(){
    computerPlay()=computerSelection;
    console.log(playerSelection)
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        updateScore("Tie");
    }
    if((playerSelection === 'rock') && (computerSelection === 'scissors')){
        playerScore++
        updateScore("You win");
    }
    if((playerSelection === 'rock') && (computerSelection === 'paper')){
        computerScore++
        updateScore("You lose");
    }
    if((playerSelection === 'paper') && (computerSelection === 'rock')){
        playerScore++
        updateScore("You win");
    }
    if((playerSelection === 'paper') && (computerSelection === 'scissors')){
        computerScore++
        updateScore("You lose");
    }
    if((playerSelection === 'scissors') && (computerSelection === 'paper')){
        playerScore++
        updateScore("You win");
    }
    if((playerScore === 'scissors') && (computerSelection === 'rock')){
        computerScore++
        updateScore("You lose");
    }
}

function updateScore(outcome){
    document.getElementById("results").innerHTML = outcome;
    document.getElementById("score").innerHTML = `Player: ${playerScore} || Computer: ${computerScore}`;
    checkWin();
}
