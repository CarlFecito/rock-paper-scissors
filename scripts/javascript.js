let playerScore = 0;
let computerScore = 0;
scoreDiv = document.getElementById('score')

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

/* The function takes the player's selection and compares it to the computer's selection.
 If the player wins, the player's score increases by one. 
 If the computer wins, the computer's score increases by one. 
 If the player and computer tie, nothing happens */
function playRound(pSelect) {
    let computerSelection = computerPlay()
    console.log(computerSelection + "compSel")
    console.log(pSelect + "pSel")
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