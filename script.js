document.addEventListener("DOMContentLoaded", function() {
    const playerText = document.querySelector(".player");
    const compText = document.querySelector(".comp");
    const resultText = document.querySelector(".result");
    const compScorePlace = document.querySelector(".compScore");
    const playerScorePlace = document.querySelector(".playerScore");
    const myButton = document.querySelectorAll(".my-buttons");
    const gameButtons = document.getElementById("game-buttons");
    let playerChoice;
    let compChoice;
    let result;
    let compScore = 0;
    let playerScore = 0;

     //gets comp choice
     function getCompChoice() {
        compChoice = Math.floor(Math.random() * 3);
        if (compChoice == 0) {
        compChoice = "ROCK"
        }
        else if (compChoice == 1) {
        compChoice = "PAPER"
        }
        else {
        compChoice = "SCISSORS"
        }
        return compChoice
    }

    //function that compares player and comp choice
    function compareChoices() {
        if (compChoice == playerChoice) {
            resultText.textContent = "It's a tie!";
        } else if (compChoice == "ROCK" && playerChoice == "SCISSORS") {
            resultText.textContent = "You lost! Rock beats scissors!";
            compScore++;
            compScorePlace.textContent = "Computer Score: " + compScore;
        } else if (compChoice == "PAPER" && playerChoice == "ROCK") {
            resultText.textContent = "You lost! Paper beats rock!";
            compScore++;
            compScorePlace.textContent = "Computer Score: " + compScore;
        } else if (compChoice == "SCISSORS" && playerChoice == "PAPER") {
            resultText.textContent = "You lost! Scissors beats paper!";
            compScore++;
            compScorePlace.textContent = "Computer Score: " + compScore;
        } else if (playerChoice == "ROCK" && compChoice == "SCISSORS") {
            resultText.textContent = "You Won! Rock beats scissors!";
            playerScore++;
            playerScorePlace.textContent = "Player Score: " + playerScore;
        } else if (playerChoice == "PAPER" && compChoice == "ROCK") {
            resultText.textContent = "You won! Paper beats Rock!";
            playerScore++;
            playerScorePlace.textContent = "Player Score: " + playerScore;
        } else if (playerChoice == "SCISSORS" && compChoice == "PAPER") {
            resultText.textContent = "You won! Scissors beats paper!";
            playerScore++;
            playerScorePlace.textContent = "Player Score: " + playerScore;
        }
    }
    // Add event listener to the parent container
    gameButtons.addEventListener('click', handleButtonClick);

    // Event handler function
    function handleButtonClick(event) {
    const button = event.target;

    // Check if a button was clicked
    if (button.tagName === 'BUTTON') {
        playerChoice = button.getAttribute('data-choice');
        playerText.textContent = "Players Choice: " + playerChoice;
        getCompChoice();
        compText.textContent = "Comp Choice: " + compChoice;
        compareChoices();
        
    }
    }

   
})


// //function that compares player and comp choice
// function compareChoices() {
//     if (compChoice == playerChoice) {
//         resultText.textContent = "It's a tie!";
//     } else if (compChoice == "ROCK" && playerChoice == "SCISSORS") {
//         resultText.textContent = "You lost! Rock beats scissors!";
//     } else if (compChoice == "PAPER" && playerChoice == "ROCK") {
//         resultText.textContent = "You lost! Paper beats rock!";
//     } else if (compChoice == "SCISSORS" && playerChoice == "PAPER") {
//         console.log("You lost! Scissors beats paper!")
//         resultText.textContent = "You lost! Scissors beats paper!";
//     } else if (playerChoice == "ROCK" && compChoice == "SCISSORS") {
//         resultText.textContent = "You Won! Rock beats scissors!";
//     } else if (playerChoice == "PAPER" && compChoice == "ROCK") {
//         resultText.textContent = "You won! Paper beats Rock!";
//     } else if (playerChoice == "SCISSORS" && compChoice == "PAPER") {
//         console.log("You won! Scissors beats paper!")
//         resultText.textContent = "You won! Scissors beats paper!";
//     }
// }