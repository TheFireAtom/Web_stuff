// Main script

// Constants

const tasks = document.querySelector("#tasks");
console.log(tasks);
const input = document.querySelector("#text-input");
console.log(input);
const addBtn = document.querySelector("#add-button");
console.log(addBtn);

// Function for adding tasks

function addTask() {
    let inputText = input.value;
    let li = document.createElement("li");
    li.innerText = inputText;
    let span = document.createElement("span");
    span.innerText = "❌";
    li.append(span);
    tasks.appendChild(li);

}

// addBtn.addEventListener("click", function(e) {
//     if (e.currentTarget === "")
// });