// Greeting message
const greetings = alert("Hello! In this simple rock paper scissors game you will play against bot. To start the game, press \"OK\" button and choose your handsign. \
You can always restart the game by pressing f5. Good luck!!!");

// DOM objects 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Game variables
let botAnswer;
let playerAnswer;
let check = false;

// Event listeners
rock.addEventListener("click", function(){
    playerAnswer = "rock";
    check = true;
    botAnswer = botAnswerChoise();
    compare(playerAnswer, botAnswer);
    return playerAnswer;
});
paper.addEventListener("click", function(){
    playerAnswer = "paper";
    check = true;
    botAnswer = botAnswerChoise();
    compare(playerAnswer, botAnswer);
    return playerAnswer;
});
scissors.addEventListener("click", function(){
    playerAnswer = "scissors";
    check = true;
    botAnswer = botAnswerChoise();
    compare(playerAnswer, botAnswer);
    return playerAnswer;
});

// playerAnswer logic

// function playerAnswerChoise() {
//     rock.addEventListener("click", function(){
//         playerAnswer = "rock";
//         check = true;
//         console.log(playerAnswer);
//         return playerAnswer;
//     });
//     paper.addEventListener("click", function(){
//         playerAnswer = "paper";
//         check = true;
//         return playerAnswer;
//     });
//     scissors.addEventListener("click", function(){
//         playerAnswer = "scissors";
//         check = true;
//         return playerAnswer;
//     });
// }

// botAnswer logic
function botAnswerChoise() {
    let randomNum = Math.random();

    if (randomNum <= 0.33) {
        botAnswer = "rock";
    }
    else if (randomNum > 0.33 && randomNum < 0.66) {
        botAnswer = "paper";
    }
    else if (randomNum >= 0.66) {
        botAnswer = "scissors";
    }

    return botAnswer;
}

// Game logic
function compare(playerAnswer, botAnswer) {
    if (check) {
        console.log(playerAnswer);
        if (playerAnswer == "rock" && botAnswer == "paper") {
            return alert("bot win this time!!!");
        }
        else if (playerAnswer == "rock" && botAnswer == "scissors") {
            return alert("player win this time!!!");
        }
        else if (playerAnswer == "paper" && botAnswer == "rock") {
            return alert("player win this time!!!");
        }
        else if (playerAnswer == "paper" && botAnswer == "scissors") {
            return alert("bot win this time!!!");
        }
        else if (playerAnswer == "scissors" && botAnswer == "rock") {
            return alert("bot win this time!!!");
        }
        else if (playerAnswer == "scissors" && botAnswer == "paper") {
            return alert("player win this time!!!");
        }
        else {
            return alert("player win this time!!!");
        }
    }
}

// function calling











