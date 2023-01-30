const buttons = Array.from(document.querySelectorAll('.options img'))

buttons.forEach((item) => item.addEventListener('click', 
    (e) => {
        score(playRound(e.target.id, getComputerChoice())) 
    }
))

const answer = document.querySelector('.message')

let playerPoints = 0,
computerPoints = 0
round = 0

let getComputerChoice = () => {

    const number = Math.floor(Math.random() * 3) + 1

    switch(number){
        case 1: return 'rock'
        case 2: return 'paper'
        case 3: return 'scissors'
    }

}

let playRound = (playerSelection, computerSelection) => {

  if(playerSelection == computerSelection){
    phrase = ('Draw!')
    answer.textContent = phrase
    console.log(phrase)
    return null
  }

  switch(playerSelection){
    case 'rock':
        if(computerSelection == 'paper') { 
            let phrase = ("You Lose! Paper beats Rock")
            answer.textContent = phrase
            console.log(phrase)
            return false
        } if(computerSelection == 'scissors') {
            let phrase = ("You win! Rock beats Scissors")
            answer.textContent = phrase
            console.log(phrase)
            return true
        }
    case 'paper':
        if(computerSelection == 'scissors') {
            let phrase = ("You Lose! Scissors beats Paper")
            answer.textContent = phrase
            console.log(phrase)
            return false
        } if(computerSelection == 'rock') {
            let phrase = ("You win! Paper beats Rock")
            answer.textContent = phrase
            console.log(phrase)
            return true
        }
    case 'scissors':
        if(computerSelection == 'rock') {
            let phrase = ("You Lose! Rock beats Scissors")
            answer.textContent = phrase
            console.log(phrase)
            return false
        } if(computerSelection == 'paper') {
            let phrase = ("You win! Scissors beats Paper")
            answer.textContent = phrase
            console.log(phrase)
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
        answer.textContent = (`You win! ${result}`)
    else if(playerPoints < computerPoints)
        answer.textContent = (`You lose! ${result}`)
    else
        answer.textContent = (`Draw! ${result}`)
    
}

let score = (result) => {

        if(result == false) {
            computerPoints++
        } else if(result == true) {
            playerPoints++
        }     
    
    round++
    const score = '(' + playerPoints + ' - ' + computerPoints + ')'        

    if(round == 5){
        if(playerPoints > computerPoints)
            alert(`You win! ${score}`)
        else if(playerPoints < computerPoints)
            alert(`You lose! ${score}`)
        else
            alert(`Draw! ${score}`)
    }

}