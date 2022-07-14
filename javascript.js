let playerScore = 0;
let computerScore = 0;
let totalGames = 0;


function computerPlay(){
	let choices = ['rock','paper','scissors'];
	return choices[Math.floor(Math.random() * choices.length)]
    }
    
function playGame(){
	let choices = ['rock','paper','scissors'];
    let rock = choices.indexOf('rock');
    let paper = choices.indexOf('paper');
    let scissors = choices.indexOf('scissors');
    let text = ""; 
    let computerChoice = computerPlay();
    const userInput = prompt('Choose rock, paper, or scissors').toLowerCase()
	
    
  
    if ((userInput == 'rock' && computerChoice == 'scissors') ||
        (userInput == 'paper' && computerChoice == 'rock') ||
        (userInput == 'scissors' && computerChoice == 'paper')){

        playerScore += 1
        totalGames += 1
        text = ("You win! You chose " + `${userInput}.` + `The computer chose ` + `${computerChoice}.`);
    }
    else if (userInput == computerChoice){

        totalGames +=1
        text = ("It's a tie, you both chose " + `${userInput}.`)
    }
    else{
        computerScore += 1
        totalGames += 1
        text = ('You lose, the computer chose ' + `${computerChoice}` + ' and you chose ' + `${userInput}.`);
        } 
    

    
    document.getElementById('demo').innerHTML = text;
    document.getElementById('playerscore').innerHTML = playerScore
    document.getElementById('pc').innerHTML = computerScore;
    document.getElementById('totalgames').innerHTML = totalGames

}
