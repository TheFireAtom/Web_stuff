// Main script

// Constants

const taskList = document.getElementById("task-list");
console.log(taskList);
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
        taskList.appendChild(li);
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
        taskList.textContent = '';
        // deleteData();
    }
}

// Clear green tasks (done) function

function clearGreen() {
    let yes = confirm("Are you sure? All done tasks will be deleted!!!");
    let childList = taskList.querySelectorAll(".crossed");
    if (yes === true) {
        childList.forEach((child) => (child.classList.add("del")));
        setData();
        console.log(childList);
    }
}


// Deleting and cross out elements function

taskList.addEventListener("click", function(e) {
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
    localStorage.setItem("data", taskList.innerHTML);
}

function getData() {
    taskList.innerHTML = localStorage.getItem("data");
}

// function deleteData() {
//     localStorage.clear();
// }

getData();
