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

let computerSelecion = computerPlay()

function playRound(playerSelection, computerSelecion) {
    if (playerSelection == computerSelecion) {
        console.log(`It's a Tie`)
    } else if (playerSelection == `rock` && computerSelecion == `paper`) {
        console.log(`You Lose! Paper beats Rock`)
    } else if (playerSelection == `rock` && computerSelecion == `scissors`) {
        console.log(`You Win! Rock beats Scissors`)
    }   else if (playerSelection == `paper` && computerSelecion == `scissors`) {
        console.log(`You Lose! Scissors beats Paper`)
    } else if (playerSelection == `paper` && computerSelecion == `rock`) {
        console.log(`You Win! Paper beats Rock`)
    } else if (playerSelection == `scissors` && computerSelecion == `rock`) {
        console.log(`You Lose! Rock beats Scissors`)
    } else if (playerSelection == `scissors` && computerSelecion == `paper`) {
        console.log(`You Win! Scissors beats Paper`)
    } else console.log(`Error`)
}