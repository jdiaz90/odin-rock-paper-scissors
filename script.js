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

let score = (result) => {

        if(result == false) {
            computerPoints++
        } else if(result == true) {
            playerPoints++
        }     
    
    round++
    const score = '(' + playerPoints + ' - ' + computerPoints + ')'      
    let text  

    if(round == 5){
        
        if(playerPoints > computerPoints)
            text = `You win! ${score}`
        else if(playerPoints < computerPoints)
            text = `You lose! ${score}`
        else
            text = `Draw! ${score}`

        printResult(text)

    }

}

let printResult = (text) => {

    const divResult = document.createElement('div')
    divResult.textContent = text
    divResult.classList.add('result')
    document.querySelector('body').append(divResult)
    document.querySelector('.options').remove()

}