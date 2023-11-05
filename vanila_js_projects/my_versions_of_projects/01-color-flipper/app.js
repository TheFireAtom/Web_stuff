const colors = ["Crimson", "SteelBlue", "ForestGreen", "Gold", "DarkSlateGray", "DarkMagenta"];

const color = document.getElementById("hex");

const button = document.getElementById("button");

button.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
