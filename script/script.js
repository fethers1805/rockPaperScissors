const gameChoices = ["rock", "paper", "scissors"];

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
console.log(getComputerChoice());

