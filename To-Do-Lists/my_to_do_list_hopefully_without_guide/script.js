// Main script

// Constants

const tasks = document.getElementById("tasks");
console.log(tasks);
const input = document.getElementById("text-input");
console.log(input);
const addBtn = document.getElementById("add-button");
console.log(addBtn);

// Function for adding tasks

function addTask() {

    if (input.value === '') {
        alert("Please, enter your task")
    }

    else {
        let li = document.createElement("li");
        let inputText = input.value;
        li.innerText = inputText;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "❌";
        li.append(span);
    }
    input.value = "";
}

// Deleting and cross out elements function

tasks.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("crossed");
    }

    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.classList.add("del");
    }
}, false);

function saveData() {
    
}