const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.getElementById("hex");

const button = document.getElementById("button");

button.addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getRandomColor() {
    return `#${hex[getRandomNumber()]}${hex[getRandomNumber()]}${hex[getRandomNumber()]}${hex[getRandomNumber()]}${hex[getRandomNumber()]}${hex[getRandomNumber()]}`;
}

console.log(getRandomColor(getRandomNumber()));