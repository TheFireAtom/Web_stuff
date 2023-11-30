// Constants

// Tags from HTML file
const canvas = document.getElementById("canvas");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
// Game constants
const context = canvas.getContext("2d");
// Sizes and numbers constants
const unitSize = 25;
const foodSize = unitSize;
const canvasWidth = canvas.offsetWidth - 10; // because 10 is border size, 5px from right and 5px from left
const canvasHeight = canvas.offsetHeight - 10;
console.log(canvasWidth);
const xVelocity = unitSize;
const yVelocity = 0;
// Color constants
const innerSnakeColor = "#F05941";
const outerSnakeColor = "#22092C"
const innerfoodColor = "#F05941";
const outerFoodColor = "#22092C";
// Snake constant (here i use an array of objects to draw a snake)
const snake = [
    {x:unitSize * 5, y:unitSize},
    {x:unitSize * 4, y:unitSize},
    {x:unitSize * 3, y:unitSize},
    {x:unitSize * 2, y:unitSize},
    {x:unitSize, y:unitSize}
];
// Boolean for gameOver 
let running = true;

// Functions
function drawFood() {
    function placeFood(min, max) {
        let randomNumber = ((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randomNumber;
    };
    
};
