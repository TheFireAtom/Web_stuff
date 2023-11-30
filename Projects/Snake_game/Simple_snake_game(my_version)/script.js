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
const xVelocity = unitSize;
const yVelocity = 0;
// Color constants
const innerSnakeColor = "#F05941";
const outerSnakeColor = "#000000"
const innerFoodColor = "#830C24";
const outerFoodColor = "#000000";
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

drawFood();

// Functions
function drawFood() {
    function placeInnerFood(min, max) {
        let randomNumber = (Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize);
        return randomNumber;
    };
    // Inner food placing
    let tempFoodLocation = placeInnerFood(0, canvasWidth);
    context.fillStyle = innerFoodColor;
    let innerRect = context.fillRect(tempFoodLocation, tempFoodLocation, unitSize, unitSize);
    context.strokeStyle = outerFoodColor;
    let outerRect = context.strokeRect(tempFoodLocation, tempFoodLocation, unitSize, unitSize);

    // context.fillRect(placeinnerFood(0, canvasWidth), placeinnerFood(0, canvasHeight), unitSize, unitSize);
    // Outer food (border) placing
    // context.fillStyle = outerFoodColor;
    // context.strokeRect(placeinnerFood(0, canvasWidth), placeinnerFood(0, canvasHeight), unitSize, unitSize);
};