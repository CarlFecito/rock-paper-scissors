let playerSelection

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', function(){{playRound(button.id)}});
});

function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3)
    if (computerPick == 0) {
        return `rock`
    } else if (computerPick == 1) {
        return `paper`
    } else {
        return `scissors`
    }
}

function playRound(playerSelection) {
		let computerSelecion = computerPlay()
    if (playerSelection === computerSelecion) {
      alert(`It's a Tie`)
      return null
    } else if (
      (playerSelection === `rock` && computerSelecion === `paper`) ||
			(playerSelection === `scissors` && computerSelecion === `rock`) || 
			(playerSelection === `paper` && computerSelecion === `scissors`)
		) {
      alert(`You Lose`)
      computerScore++
    } else if (
			 (playerSelection == `rock` && computerSelecion == `scissors`) || 
			 (playerSelection == `scissors` && computerSelecion == `paper`) || 
			 (playerSelection == `paper` && computerSelecion == `rock`)
		) {
        alert(`You Win`)
        playerScore++
    } else console.log(`Error`)
}
