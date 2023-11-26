//  Global Script

// constants

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function for adding tasks

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!!!");
    }

    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// EventListener for crossing and deleteng tasks

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Fucntion for storing data in browser

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.removeItem(listContainer.innerText);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
saveData();