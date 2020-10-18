const gameObjects = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomPicker = Math.floor(Math.random() * 2);
    return gameObjects[randomPicker];
}

function playerSelection() {
    let selection = '';
    while (!selection || !gameObjects.includes(selection.toLowerCase())) {
        selection = window.prompt('Please enter your game input');
    }
    return selection
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return 'Its a tie!!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost this round'
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won this round'
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost this round'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won this round'
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won this round'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost this round'
    } else {
        throw new Error('Unhandled exception caught on game round!')
    }
    
    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
}
console.log(playRound(playerSelection(), computerPlay()))