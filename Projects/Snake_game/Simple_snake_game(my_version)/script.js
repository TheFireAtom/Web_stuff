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
const innerSnakeColor = "#228B22";
const outerSnakeColor = "#000000"
const innerFoodColor = "#DC143C";
const outerFoodColor = "#000000";
// Snake constant (here i use an array of objects to draw a snake)
const snake = [
    {x:0, y:0},
    {x:xVelocity, y:0},
    {x:xVelocity * 2, y:0},
    {x:xVelocity * 3, y:0},
    {x:xVelocity * 4, y:0}
];
// Boolean for gameOver 
let running = true;
let velocityUpdate = 5;
// Functions call

drawFood();
drawSnake();
tickDelay();

// Functions

function drawFood() {
    function placeInnerFood(min, max) {
        let randomNumber = (Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize);
        return randomNumber;
    };
    // let variable for food placing (inner rectangle and outer rectangle are two different objects)
    let tempFoodLocation = placeInnerFood(0, canvasWidth);
    // Outer food placing
    context.strokeStyle = outerFoodColor;
    context.strokeRect(tempFoodLocation, tempFoodLocation, unitSize, unitSize);
    // Inner food placing
    context.fillStyle = innerFoodColor;
    context.fillRect(tempFoodLocation, tempFoodLocation, unitSize, unitSize);
};

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = innerSnakeColor;
        context.strokeRect(snake[i].x, snake[i].y, unitSize, unitSize);
        context.fillRect(snake[i].x, snake[i].y, unitSize, unitSize);
    }
    moveSnake();
};

function moveSnake() {
    snake.push({x:xVelocity * velocityUpdate, y:0});
    removeTail();
    snake.shift();
    velocityUpdate++;
    console.log(snake);
};

function removeTail() {
    context.clearRect(snake[0].x, snake[0].y, unitSize, unitSize);
    context.clearRect(snake[0].x, snake[0].y, unitSize, unitSize);
};

function resetGame() {
    running = false;
    if (running == false) {
        // gameOver();
    }
};

function tickDelay() {
    // window.setInterval(drawSnake, 75);
};

