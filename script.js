let getComputerChoice = () => {

    const number = Math.floor(Math.random() * 3) + 1

    switch(number){
        case 1: return 'rock'
        case 2: return 'paper'
        case 3: return 'scissors'
    }

}

let getPlayerSelection = () => {

    let choice

   do{
        choice = prompt('Rock, Paper or Scissors?') 
   }while (
        choice.toLowerCase() != 'rock' 
        && choice.toLowerCase() != 'paper' 
        && choice.toLowerCase() != 'scissors'
    )
    return choice.toLowerCase()
}

let playRound = (playerSelection, computerSelection) => {

  if(playerSelection == computerSelection){
    alert('Draw!')
    return null
  }

  switch(playerSelection){
    case 'rock':
        if(computerSelection == 'paper') { 
            alert("You Lose! Paper beats Rock")
            return false
        } if(computerSelection == 'scissors') {
            alert("You win! Rock beats Scissors")
            return true
        }
    case 'paper':
        if(computerSelection == 'scissors') {
            alert("You Lose! Scissors beats Paper")
            return false
        } if(computerSelection == 'rock') {
            alert("You win! Paper beats Rock")
            return true
        }
    case 'scissors':
        if(computerSelection == 'rock') {
            alert("You Lose! Rock beats Scissors")
            return false
        } if(computerSelection == 'paper') {
            alert("You win! Scissors beats Paper")
            return true  
        }
    }              
}

let game = () => {

    let playerPoints = 0,
    computerPoints = 0

    for (let i = 0; i < 5; i++) {

        let playerSelection = getPlayerSelection()
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)

        if(result == false) {
            computerPoints++
        } else if(result == true) {
            playerPoints++
        } 

    }       

    const result = '(' + playerPoints + ' - ' + computerPoints + ')'

    if(playerPoints > computerPoints)
        alert(`You win! ${result}`)
    else if(playerPoints < computerPoints)
        alert(`You lose! ${result}`)
    else
        alert(`Draw! ${result}`)
    
}

game()