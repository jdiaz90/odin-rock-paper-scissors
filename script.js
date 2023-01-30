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
    printRound(phrase, round)
    console.log(phrase)
    return null
  }

  switch(playerSelection){
    case 'rock':
        if(computerSelection == 'paper') { 
            let phrase = ("You Lose! Paper beats Rock")
            printRound(phrase, round)
            console.log(phrase)
            return false
        } if(computerSelection == 'scissors') {
            let phrase = ("You win! Rock beats Scissors")
            printRound(phrase, round)
            console.log(phrase)
            return true
        }
    case 'paper':
        if(computerSelection == 'scissors') {
            let phrase = ("You Lose! Scissors beats Paper")
            printRound(phrase, round)
            console.log(phrase)
            return false
        } if(computerSelection == 'rock') {
            let phrase = ("You win! Paper beats Rock")
            printRound(phrase, round)
            console.log(phrase)
            return true
        }
    case 'scissors':
        if(computerSelection == 'rock') {
            let phrase = ("You Lose! Rock beats Scissors")
            printRound(phrase, round)
            console.log(phrase)
            return false
        } if(computerSelection == 'paper') {
            let phrase = ("You win! Scissors beats Paper")
            printRound(phrase, round)
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
    let text, gif

    if(round == 5){
        
        if(playerPoints > computerPoints) {
            text = `You win! ${score}`
            gif = './images/win.gif'

        } else if(playerPoints < computerPoints) {
            text = `You lose! ${score}`
            gif = './images/lose.gif'

        } else {
            text = `Draw! ${score}`
            gif = './images/draw.gif'
        }


        printResult(text, gif)

    }

}

let printResult = (text, gif) => {

    const divResult = document.createElement('div')
    const top = document.createElement('p')
    const bottom = document.createElement('p')
    const img = document.createElement('img')

    top.textContent = 'Final Score:'
    bottom.textContent = text
    img.src = gif

    top.classList.add('bolder')
    img.classList.add('gif-result')
    divResult.classList.add('result')

    divResult.append(top)
    divResult.append(bottom)
    document.querySelector('body').append(divResult)
    document.querySelector('body').append(img)
    
    document.querySelector('.options').remove()

}

let printRound = (text, round) => {

    const div = document.querySelector('.message')
    const top = document.createElement('p')
    const bottom = document.createElement('p')

    while (div.firstChild) {
        div.removeChild(div.firstChild);
      }

    top.textContent = `Round ${round + 1}:`
    bottom.textContent = text

    top.classList.add('bolder')

    div.append(top)
    div.append(bottom)

}