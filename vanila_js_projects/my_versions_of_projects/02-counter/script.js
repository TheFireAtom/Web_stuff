// initial count 
let counter = 0;

// value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".button");

// adjusting counter value
buttons.forEach(function (btn) {
    btn.addEventListener("click", function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            counter--;
        }

        else if (styles.contains('increase')) {
            counter++;
        }

        else {
            counter = 0;
        }

        if (counter < 0) {
            value.style.color = "crimson";
        }
        
        if (counter > 0) {
            value.style.color = "green";
        }

        if (counter == 0) {
            value.style.color = "black";
        }

        value.textContent = counter;
    });
});