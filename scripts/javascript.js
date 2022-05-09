let playerScore = 0;
let computerScore = 0;
scoreDiv = document.getElementById('score')
playerPick = document.getElementById('pPick')
computerPick = document.getElementById('cPick')

/* Selecting all the buttons and adding an event listener to each one. */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})


/* It returns a random "weapon" from the weapons array */
function computerPlay() {
    const weapons = ['rock', 'paper', 'scissors'];
    return weapons[Math.floor(Math.random() * weapons.length)];
}


/**
 * The function takes the player's selection and compares it to the computer's selection. If the
 * selections are the same, the score is updated. If the player's selection beats the computer's
 * selection, the player's score is updated. If the computer's selection beats the player's selection,
 * the computer's score is updated
 */
function playRound(pSelect) {
    const computerSelection = computerPlay()
    computerWeapon(computerSelection)
    playerWeapon(pSelect)
    if (pSelect === computerSelection) {
        updateScore()
    } else if (
        pSelect === "rock" &&  computerSelection === "paper" || 
        pSelect === "paper" &&  computerSelection === "scissors" ||
        pSelect === "scissors" &&  computerSelection === "rock" 
        ) { 
            computerScore++
            updateScore()
    } else if (
        pSelect === "rock" &&  computerSelection === "scissors" || 
        pSelect === "paper" &&  computerSelection === "rock" ||
        pSelect === "scissors" &&  computerSelection === "paper"
        ) {
            playerScore++
            updateScore()
    }else {
        alert("error")
    }
}

/* Updating the score on the page. */
function updateScore() {
    scoreDiv.innerHTML = playerScore + ':' + computerScore
}

// update selections

function playerWeapon(wpn) {
    if (wpn === 'rock') {
        playerPick.innerHTML = `✊`
    } else if (wpn === 'paper') {
        playerPick.innerHTML = `✋`
    } else if (wpn === 'scissors') {
        playerPick.innerHTML = `✌️`
    } else {
        alert('fatal error')
    }
    
}

function computerWeapon(wpn) {
    if (wpn === 'rock') {
        computerPick.innerHTML = `✊`
    } else if (wpn === 'paper') {
        computerPick.innerHTML = `✋`
    } else if (wpn === 'scissors') {
        computerPick.innerHTML = `✌️`
    } else {
        alert('fatal error')
    }
}