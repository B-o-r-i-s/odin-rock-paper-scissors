//declare variables needed
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btn');

//how the computer operates
function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

//stop the numbers from increasing
function disableFunction() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

//how the player operates
function playRound(playerSelection){
    let computerSelection = computerPlay();
    let result = '';

    if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')){
            playerScore += 1; 
            result = 'Player has : ' + playerScore + ' and Computer has: ' + computerScore + '.';
        if(playerScore == 5){
            result += ' You won the game! Reload the page to play again'
            disableFunction();
            }
                }
    
    else if(playerSelection == computerSelection){
        result = 'It is a tie!';
    }

    else {
        computerScore += 1;
        result = 'Computer has: '+ computerScore + ' and Player has: ' + playerScore + '.';
        if( computerScore == 5){
            result += ' I won the game! Reload the page to play again'
            disableFunction();
        }
    }

    document.getElementById('result').innerText = result
    return

}

//enable the computer to record all clicks of the player
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

