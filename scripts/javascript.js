

function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3) + 1
    if (computerPick == 1) {
        return `rock`
    } else if (computerPick == 2) {
        return `paper`
    } else {
        return `scissors`
    }
}

/* 
    let playerScore = 0
    let computerScore = 0
*/

function playRound(playerSelection, computerSelecion) {
    if (playerSelection == computerSelecion) {
        alert(`It's a Tie`)
        return null
    } else if (playerSelection == `rock` && computerSelecion == `paper`) {
        alert(`You Lose`)
        computerScore++
    } else if (playerSelection == `rock` && computerSelecion == `scissors`) {
        alert(`You Win`)
        playerScore++
    }   else if (playerSelection == `paper` && computerSelecion == `scissors`) {
        alert(`You Lose`)
        computerScore++
    } else if (playerSelection == `paper` && computerSelecion == `rock`) {
        alert(`You Win`)
        playerScore++
    } else if (playerSelection == `scissors` && computerSelecion == `rock`) {
        alert(`You Lose`)
        computerScore++
    } else if (playerSelection == `scissors` && computerSelecion == `paper`) {
        alert(`You Win`)
        playerScore++
    } else console.log(`Error`)
}

/*function game() { //five round game
    for (let i = 0; i < 5; i++) {
        playRound(prompt(`pick your hand`, ``), computerPlay())
    }
    if (computerScore == playerScore) {
        alert(`COMPUTER: ` + computerScore + `    ` + `PLAYER: ` + playerScore + `     ` + `It's a Tie`)
    } else if (computerScore > playerScore) {
        alert(`COMPUTER: ` + computerScore + `    ` + `PLAYER: ` + playerScore + `     ` + `Computer Wins`)
    } else {alert(`COMPUTER: ` + computerScore + `    ` + `PLAYER: ` + playerScore + `     ` + `Player Wins`)
    }
}*/