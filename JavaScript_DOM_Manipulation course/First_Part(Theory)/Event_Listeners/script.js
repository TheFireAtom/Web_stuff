// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript!!!');
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.box-3');

function changeBackgroundColor() {
    newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBackgroundColor);