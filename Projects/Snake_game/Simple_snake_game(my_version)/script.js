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
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];
// Boolean for gameOver 
let running = true;

drawFood();
drawSnake();

// Functions
function drawFood() {
    function placeInnerFood(min, max) {
        let randomNumber = (Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize);
        return randomNumber;
    };
    // let variable for food placing (inner rectangle and outer rectangle are two different objects)
    let tempFoodLocation = placeInnerFood(0, canvasWidth);
    // Inner food placing
    context.fillStyle = innerFoodColor;
    let innerRect = context.fillRect(tempFoodLocation, tempFoodLocation, unitSize, unitSize);
    // Outer food placing
    context.strokeStyle = outerFoodColor;
    let outerRect = context.strokeRect(tempFoodLocation, tempFoodLocation, unitSize, unitSize);
};
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i].x, snake[i].y, unitSize, unitSize);
        context.strokeRect(snake[i].x, snake[i].y, unitSize, unitSize);
    }
};
function tickDelay() {

};

