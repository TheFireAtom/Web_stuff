// Main scipt

// Constants

// Items sections
let section = document.getElementsByClassName("section");
console.log(section);
// Items
let item = document.getElementsByClassName("item")
// Span with cross
let clear = document.getElementsByClassName("cross-clear");
// Footer buttons
const add = document.getElementsByClassName("add"); 
const del = document.getElementsByClassName("del");
const edit = document.getElementsByClassName("edit");
const search = document.getElementsByClassName("search");

// Functions 

// Function for clearing tasks (items)  
function clearItem(event) {
    event.target.style.display = "none";
}
// Condition and Event Listener for clear item button
for (let i = 0; i < document.querySelectorAll(".section").length; i++) {
    if (clear.addEventListener("click", clearItem(firstItem))) {
        firstItem.classList.toggle("closed");
    }
}

