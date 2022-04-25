function pick(pck) {
	playRound(pck, computerPlay())
}

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
