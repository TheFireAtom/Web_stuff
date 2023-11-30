// Variables

// Tags from HTML file
const canvas = document.getElementById("canvas");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
// Game constants
const context = canvas.getContext("2d");
// Sizes and numbers constants
const unitSize = 25;
const foodSize = unitSize;
const canvasWidth = canvas.width; 
const canvasHeight = canvas.height;
// Color constants
const innerSnakeColor = "#228B22";
const outerSnakeColor = "#000000"
const innerFoodColor = "#DC143C";
const outerFoodColor = "#000000";
// lets 
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let velocityUpdate = 5;
let foodX;
let foodY;
let score = 0;
// Snake let (here i use an array of objects to draw a snake)
let snake = [
    {x:0, y:0},
    {x:xVelocity, y:0},
    {x:xVelocity * 2, y:0},
    {x:xVelocity * 3, y:0},
    {x:xVelocity * 4, y:0}
];

// Event listeners
window.addEventListener("keydown", changeDirection);
restartBtn.addEventListener("click", resetGame);

// Functions call

startGame();

// Functions

function startGame() {
    running = true;
    score = 0;
    createFood();
    drawFood();
    nextTick();
};

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            drawSnake();
            moveSnake();
            gameOver();
            nextTick();
        }, 75);
    }

    else {
        gameOver();
    }
};

function clearBoard() {
    context.fillStyle = "gray";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
};

function createFood() {
    function placeFood(min, max) {
        let randomNumber = (Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize);
        return randomNumber;
    };
    foodX = placeFood(0, canvasWidth - unitSize);
    foodY = placeFood(0, canvasHeight - unitSize);
};

function drawFood() {
    context.fillStyle = innerFoodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
    context.strokeStyle = outerFoodColor;
    context.strokeRect(foodX, foodY, unitSize, unitSize);
};

function drawSnake() {
    context.fillStyle = innerSnakeColor;
    context.strokeStyle = outerSnakeColor;
    snake.forEach(element => {
        context.fillRect(element.x, element.y, unitSize, unitSize);
        context.strokeRect(element.x, element.y, unitSize, unitSize);
    });
};

function moveSnake() {
    let head = {x: snake[snake.length-1].x + xVelocity,
                y: snake[snake.length-1].y + yVelocity};
    snake.push({x:xVelocity * velocityUpdate, y:0});
    velocityUpdate++;
    if (snake[snake.length-1].x == foodX && snake[snake.length-1].y == foodY) {
        score++;
        score.TextContent = score;
        createFood();
        drawFood();
    }

    else {
        snake.shift();
    }
};

function changeDirection(event) {
    let pressedKey = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity = -unitSize);
    const goingDown = (yVelocity = unitSize);
    const goingRight = (xVelocity = unitSize);
    const goingLeft = (xVelocity = -unitSize);

    switch(true) {
        case (pressedKey == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (pressedKey == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (pressedKey == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (pressedKey == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};

function gameOver() {
    switch(true) {
        case (snake[snake.length-1].x <= 0):
            running = false;
            break;
        case (snake[snake.length-1].x > 0):
            running = false;
            break;
        case (snake[snake.length-1].y <= 0):
            running = false;
            break;
        case (snake[snake.length-1].y > 0):
            running = false;
            break;
    }

    for (let i = 0; i < snake.length; i++) {
        if (snake[snake.length-1].x == snake[i] && snake[snake.length-1].y == snake[i]) {
            running = false;
        }
    }
};

function resetGame(score) {
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:0, y:0},
        {x:xVelocity, y:0},
        {x:xVelocity * 2, y:0},
        {x:xVelocity * 3, y:0},
        {x:xVelocity * 4, y:0}
    ];
    startGame();
};


