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
        alert("Please, enter your task");
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
    setData();
}

// Clearing all tasks function

function clearAll() {
    let yes = confirm("Are you sure? All tasks will be deleted!!!");
    if (yes === true) {
        tasks.textContent = '';
        deleteData();
    }
}

// Clear green tasks (done) function

function clearGreen() {
    let yes = confirm("Are you sure? All done tasks will be deleted!!!");
    let childList = tasks.querySelector(".crossed");
    if (yes === true) {
        childList.innerHTML = '';
    }
}


// Deleting and cross out elements function

tasks.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("crossed");
        setData();
    }
    

    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.classList.add("del");
        setData();
    }
    
}, false);

// Functions for saving and getting user data (get/set tasks)

function setData() {
    localStorage.setItem("data", tasks.innerHTML);
}

function getData() {
    tasks.innerHTML = localStorage.getItem("data");
}

function deleteData() {
    localStorage.clear();
}

getData();
