const gameChoices = ['rock', 'paper', 'scissors'];
let playerChoiceValid = 0;
/* 

INITIAL FUNCTION FOR COMPUTER CHOICE

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

*/

function getComputerChoice() {
    // Pick a random spot from the array of options a participant can choose from.
    return gameChoices[Math.floor(Math.random()*3)];
}

function getPlayerChoice() {
    // Get and clean the player's choice
    let initialChoice =prompt("What would you like to pick; rock, paper or scissors? ", "");
    if (initialChoice === null){
        return initialChoice;
    }
    else {
        initialChoice.toString();
        initialChoice.toLowerCase();
        return initialChoice;
    }
}

function verifyPlayerChoice(choiceToVerify) {
    if (gameChoices.includes(choiceToVerify)) {
        return true;
    }
    else {
        return false;
    }
}

function compareChoices(computer, player) {
    if (computer === player) {
        return "DRAW";
    }
    else if (computer === "rock") {
        if (player === "scissors") {
            return "Computer wins.";
        }
        else {
            return "Player wins.";
        }
    }

    else if (computer === "paper") {
        if (player === "rock") {
            return "Computer wins";
        }
        else {
            return "Player wins";
        }

    }

    else if (computer === "scissors") {
        if (player === "paper") {
            return "Computer wins";
        }
        else {
            return "Player wins";
        }
    }
    else {
        return `computer somehow got ${computer} value`;
    }
}

function playGame() {
    let compChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    verifyPlayerChoice(playerChoice);
    while (verifyPlayerChoice(playerChoice) != true) {
        console.log(`${playerChoice} is an invalid selection, please make a valid selection`);
        playerChoice = getPlayerChoice(); 
    }
    console.log(`Computer chose ${compChoice}.`);
    console.log(`Player chose ${playerChoice}.`);
    return compareChoices(compChoice, playerChoice);
}

console.log(playGame());


