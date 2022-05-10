let playerScore = 0;
let computerScore = 0;
scoreDiv = document.getElementById('score')
playerPick = document.getElementById('pPick')
computerPick = document.getElementById('cPick')
roundWinner = document.getElementById('winner')
displayWinner = document.getElementById('alertWin')
showPopup = document.getElementById('overlay')
resetGame = document.getElementById('reset')

/* Selecting all the buttons and adding an event listener to each one. */
const buttons = document.querySelectorAll('.end button');
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
 * @param pSelect - the player's selection
 */
function playRound(pSelect) {
    const computerSelection = computerPlay()
    computerWeapon(computerSelection)
    playerWeapon(pSelect)
    if (pSelect === computerSelection) {
        showRoundWinner('tie')
    } else if (
        pSelect === "rock" &&  computerSelection === "paper" || 
        pSelect === "paper" &&  computerSelection === "scissors" ||
        pSelect === "scissors" &&  computerSelection === "rock" 
        ) { 
            showRoundWinner('computer')
            computerScore++
            updateScore()
            checkGameOver(playerScore, computerScore)
    } else if (
        pSelect === "rock" &&  computerSelection === "scissors" || 
        pSelect === "paper" &&  computerSelection === "rock" ||
        pSelect === "scissors" &&  computerSelection === "paper"
        ) {
            showRoundWinner('player')
            playerScore++
            updateScore()
            checkGameOver(playerScore, computerScore)
    }else {
        alert("error")
    }
}

/* Updating the score on the page. */
function updateScore() {
    scoreDiv.innerHTML = playerScore + '-' + computerScore
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

function showRoundWinner(win) {
    if (win === 'player') {
        roundWinner.innerHTML = 'YOU WIN!'
    } else if (win === 'computer') {
        roundWinner.innerHTML = 'YOU LOSE!'
    } else if (win === 'tie') {
        roundWinner.innerHTML = `TIE!`
    } else {
        alert('winner error')
    }
}

function disabeButtons() {
    document.querySelectorAll('.end button').disabled = true
}

function checkGameOver(player, pc) {
    if (player === 5) {
        alertWinner('player')
    } else if (pc === 5){
        alertWinner('computer')
    } else {
        return null
    }
}

function alertWinner(gameWinner) {
    showPopup.style.display = "block"
    if (gameWinner === 'player') {
        displayWinner.innerHTML = `YOU WIN`
    } else if (gameWinner === 'computer') {
        displayWinner.innerHTML = `COMPUTER WINS`
    }
    gameOver()
}

function gameOver() {

    playerScore = 0
    computerScore = 0
    playerPick.innerHTML = ` `
    computerPick.innerHTML = ` `
    scoreDiv.innerHTML = ` `
    roundWinner.innerHTML = ` `
}

button.addEventListener('click', () => {
    playRound(button.id)
})