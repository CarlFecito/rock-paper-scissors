let playerScore = 0
let computerScore = 0;

function computerPlay() {
    const weapons = ['rock', 'paper', 'scissors'];
    const computerPick = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(computerPick)
}

function playRound(playerSelection)
    let computerSelection = computerPlay()
    
    if (playerSelection === "rock" &&  computerSelection === "paper" || 
        playerSelection === "paper" &&  computerSelection === "scissors" ||
        playerSelection === "scissors" &&  computerSelection === "rock" )
        { 
            console.log(loser)
    }