let playerScore = 0;
let computerScore = 0;
scoreDiv = document.getElementById('score')
playerPick = document.getElementById('pPick')
computerPick = document.getElementById('cPick')
roundWinner = document.getElementById('winner')
displayWinner = document.getElementById('alertWin')
emojiWinner = document.getElementById('emoji')
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

/**
 * `computerWeapon` takes a string as an argument and displays the corresponding emoji in the
 * `computerPick` div
 * @param wpn - the weapon the computer has chosen
 */
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

/**
 * If the player wins, display "YOU WIN!" in the roundWinner div. If the computer wins, display "YOU
 * LOSE!" in the roundWinner div. If it's a tie, display "TIE!" in the roundWinner div
 * @param win - the winner of the round, either 'player', 'computer', or 'tie'
 */
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


/**
 * If the player or computer has 5 points, alert the winner.
 * @param player - the player's score
 * @param pc - the number of points the computer has
 * @returns null.
 */
function checkGameOver(player, pc) {
    if (player === 5) {
        alertWinner('player')
    } else if (pc === 5){
        alertWinner('computer')
    } else {
        return null
    }
}

/**
 * The function takes in a string as an argument, and if the string is 'player', it displays a popup
 * with the text 'YOU WIN' and the emoji '🥳'. If the string is 'computer', it displays a popup with
 * the text 'COMPUTER WINS' and the emoji '😔'
 * @param gameWinner - This is the parameter that will be passed in when the function is called.
 */
function alertWinner(gameWinner) {
    showPopup.style.display = "block"
    if (gameWinner === 'player') {
        displayWinner.innerHTML = `YOU WIN`
        emojiWinner.innerHTML = `🥳`
    } else if (gameWinner === 'computer') {
        displayWinner.innerHTML = `COMPUTER WINS`
        emojiWinner.innerHTML = `😔`
    }
    gameOver()
}

/**
 * The gameOver function resets the player and computer scores to 0, clears the player and computer
 * picks, clears the score div, and clears the round winner div.
 */
function gameOver() {

    playerScore = 0
    computerScore = 0
    playerPick.innerHTML = ` `
    computerPick.innerHTML = ` `
    scoreDiv.innerHTML = ` `
    roundWinner.innerHTML = ` `
}

/* Hiding the popup when the reset button is clicked. */
resetGame.addEventListener('click', () => {
    showPopup.style.display = "none"
})