const playerName = prompt("Enter user name: ", "Harry Potter");
const botName = prompt("Enter bot name: ", "Android");
const playerChoise = prompt("Choose one: rock, paper or scissors");
let number = Math.random();
function botAnswer () {
    if (number <= 0.33) {
        return "rock";
    }
            
    else if (number > 0.33 && number < 0.66  ) {
        return "paper";
    }
            
    else if (number >= 0.66 ) {
        return "scissors";
    }
}
function playerAnswer () {
    return playerChoise;
}
function finalResult (playerAnswer, botAnswer) {
    if (playerAnswer == "rock" && botAnswer == "paper") {
        return `${botName} wins!`;
    }
    else if (playerAnswer == "rock" && botAnswer == "scissors") {
        return `${playerName} wins!`;
    }
    else if (playerAnswer == "paper" && botAnswer == "rock") {
        return `${playerName} wins!`;
    }
    else if (playerAnswer == "paper" && botAnswer == "scissors") {
        return `${botName} wins!`;
    }
    else if (playerAnswer == "scissors" && botAnswer == "rock") {
        return `${botName} wins!`;
    }
    else if (playerAnswer == "scissors" && botAnswer == "paper") {
        return `${playerName} wins!`;
    }
    else {
        return "Draw!"
    }
}
let botValue = botAnswer();
let playerValue = playerAnswer();
alert(finalResult(playerValue, botValue));



