//Defining playable options inside a variable
let play = ["rock", "paper", "scissors"];

//Outcome counter variable
let wins = 0;
let losses = 0;
let draws = 0;

//First alert message, introductory
let introduction = ("Get ready – five rounds of rock, paper, and scissors are about to start! (User's consent not required.)");
alert(introduction)

// for (let i = 0; i < 5; i++) { switching so that the page doesn't limits to 5 but the loop will break with incorrect answer
//making a loop of five turns, incremental i++ at bottom
let i = 0;
while (i < 5){

//Play Prompt & converter of upper case to lower
let hAnswer = prompt("How will it be, eh? You ought to choose!");
hAnswer = hAnswer.toLowerCase();

// Loop break for incorrect answer, so that it doesn't count as 'else'
if (
    (hAnswer !== "rock" && hAnswer !== "paper" && hAnswer !== "scissors")
) {
    alert("Dude play either rock, paper, or scissors. Reload the page to start again.");
    break; 
};

//log the computer's answer equal the array 'play' randomized to a max of its length
 let cAnswer = play[Math.floor(Math.random() * play.length)];

 //Alert for computers play in case of correct user input 
 if (hAnswer == "rock" || hAnswer == "paper" || hAnswer == "scissors") {
    alert("Computer has played " + cAnswer + ".");
 }

 //Response for draw & counter
if (hAnswer === cAnswer) {
    draws++
    alert(`It's a draw. We're keeping tabs... (${draws})`)
} 

//Response for win & counter
else if (
    (hAnswer == "rock" && cAnswer == "scissors") ||
    (hAnswer == "paper" && cAnswer == "rock") ||
    (hAnswer == "scissors" && cAnswer == "paper")
) { wins++
    alert(`You have won ${wins} times, luck lol.`)
}

//Response for loss & counter
else {
    losses++
    alert(`You have lost ${losses} times ahaha!`)
} i++ //counter for <5 loop
}

//Alert for the results at the end of the loop
alert(`You have won ${wins} times, draw ${draws} times and lost ${losses} times.`)