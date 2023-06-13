// function that randomly selects computers choice
function getCompChoice() {
     compChoice = Math.floor(Math.random() * 3);
     if (compChoice == 0) {
        compChoice = "rock"
     }
     else if (compChoice == 1) {
        compChoice = "paper"
     }
     else {
        compChoice = "scissors"
     }
     return compChoice
}

// function that recieves user input and converts it to lowercase
function getPlayerChoice() {
    playerEntry = prompt("Rock, Paper, or Scissors?: ")
    playerChoice = playerEntry.toLowerCase()
}
// Initializes score variables
let playerScore = 0;
let compScore = 0;

// function that compares comp choice to player choice and returns score and status
function compareChoices() {
    if (compChoice == playerChoice) {
        console.log("Its a tie!")
    } else if (compChoice == "rock" && playerChoice == "scissors") {
        console.log("You lost! Rock beats scissors!")
        compScore++
        console.log("Computer: " + compScore)
        console.log("You: " + playerScore)
    } else if (compChoice == "paper" && playerChoice == "rock") {
        console.log("You lost! Paper beats rock!")
        compScore++
        console.log("Computer: " + compScore)
        console.log("You: " + playerScore)
    } else if (compChoice == "scissors" && playerChoice == "paper") {
        console.log("You lost! Scissors beats paper!")
        compScore++
        console.log("Computer: " + compScore)
        console.log("You: " + playerScore)
    } else if (playerChoice == "rock" && compChoice == "scissors") {
        console.log("You won! Rock beats scissors!")
        playerScore++
        console.log("Computer: " + compScore)
        console.log("You: " + playerScore)
    } else if (playerChoice == "paper" && compChoice == "rock") {
        console.log("You won! Paper beats rock!")
        playerScore++
        console.log("Computer: " + compScore)
        console.log("You: " + playerScore)
    } else if (playerChoice == "scissors" && compChoice == "paper") {
        console.log("You won! Scissors beats paper!")
        playerScore++
        console.log("Computer: " + compScore)
        console.log("You: " + playerScore)
    }
}

getCompChoice();
getPlayerChoice();
compareChoices();