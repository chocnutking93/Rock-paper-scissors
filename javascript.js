const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let totalGames = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        playRound(button.id);
    });
});

function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true
    })}

function computerPlay(){
	let choices = ['rock','paper','scissors'];
	return choices[Math.floor(Math.random() * choices.length)]
    }

function playRound(userInput){
    let computerChoice = computerPlay();
    text = ''

    if ((userInput == 'rock' && computerChoice == 'scissors') ||
        (userInput == 'paper' && computerChoice == 'rock') ||
        (userInput == 'scissors' && computerChoice == 'paper')) {

        playerScore += 1
        totalGames += 1
        alert("You win! You chose " + `${userInput}.` + `The computer chose ` + `${computerChoice}.`);

        if (playerScore == 5) {
            alert('You win the game')
            disableButtons();
        }
    }
    else if (userInput == computerChoice){

        totalGames +=1
        alert("It's a tie, you both chose " + `${userInput}.`)
    }
    else {
        computerScore += 1
        totalGames += 1
        alert('You lose, the computer chose ' + `${computerChoice}` + ' and you chose ' + `${userInput}.`);
        
        if (computerScore == 5) {
            alert('You lost. Computer won. Try again.')
            disableButtons();
        }
    }
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    
}





