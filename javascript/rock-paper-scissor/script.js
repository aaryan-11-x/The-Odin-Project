const getComputerChoice = () => {
    const val = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * 3)
    return val[num]
}

const getHumanChoice = () => {
    let inp = prompt("Enter your value", 'rock').toLowerCase()
    return inp
}

const playGame = () => {
    let humanScore = 0
    let computerScore = 0
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice == computerChoice)
            return `It's a Draw!`
        else if (humanChoice == 'rock' && computerChoice == 'scissor') {
            humanScore += 1
            return `You win! Rock beats Scissor`
        }
        else if (humanChoice == 'scissor' && computerChoice == 'rock') {
            computerScore += 1
            return `You lost! Rock beats Scissor`
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissor') {
            computerScore += 1
            return `You lost! Scissor beats Paper`
        }
        else if (humanChoice == 'scissor' && computerChoice == 'paper') {
            humanScore += 1
            return `You won! Scissor beats Paper`
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore += 1
            return `You lost! Paper beats rock`
        }
        else {
            humanScore += 1
            return `You won! Paper beats rock`
        }
    }

    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(humanSelection, computerSelection))
    }

    console.log(`Your score: ${humanScore}`)
    console.log(`CPU score: ${computerScore}`)
    if (humanScore > computerScore)
        return "Congrats! You beat the CPU."
    else if (humanScore < computerScore)
        return "Sorry! You lost."
    else
        return "It's a Tie!"
}

console.log(playGame())