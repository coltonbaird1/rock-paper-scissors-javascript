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
