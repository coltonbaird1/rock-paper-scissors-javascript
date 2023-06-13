// function that randomly selects computers choice
function getCompChoice() {
     compChoice = Math.floor(Math.random() * 3);
     if (compChoice == 0) {
        compChoice = "Rock"
     }
     else if (compChoice == 1) {
        compChoice = "Paper"
     }
     else {
        compChoice = "Scissors"
     }
     return compChoice
}

// function that recieves user input and converts it to lowercase
function getPlayerChoice() {
    playerEntry = prompt("Rock, Paper, or Scissors?: ")
    playerChoice = playerEntry.toLowerCase()
}
