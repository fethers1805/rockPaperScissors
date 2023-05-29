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
    return prompt("What would you like to pick; rock, paper or scissors? ", "").toString().toLowerCase();

}

function verifyPlayerChoice(choiceToVerify) {
    if (gameChoices.includes(choiceToVerify)) {
        return true;
    }
    else {
        return false;
    }
}

function compareChoices() {
    let compChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    verifyPlayerChoice(playerChoice);
    while (verifyPlayerChoice(playerChoice) != true) {
        console.log(`${playerChoice} is an invalid selection, please make a valid selection`);
        playerChoice = getPlayerChoice(); 
    }
    return playerChoice;

}
console.log(compareChoices());
// console.log(getPlayerChoice());
// console.log(getPlayerChoice());
// console.log(getComputerChoice());

