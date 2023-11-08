// Quote & Author change implementation

// quotes

const quotes = ["\"You have power over your mind – not outside events. Realize this, and you will find strength.\"",
"\"We suffer more often in imagination than in reality.\"",
"No man is free who is not master of himself.",
"\"Man conquers the world by conquering himself.\"",
"\"Since every man dies, it is better to die with distinction than to live long.\""]
const persons = ["Marcus Aurelius", "Seneca", "Epictetus", "Zeno", "Musonius Rufus"]

// constants

const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const button = document.querySelector("#new-quote");

// DOM function test

console.log(quote);
console.log(person);
console.log(button);

//Event and counter 

let counter = 0;

button.addEventListener("click", function () {
    if (counter < quotes.length) {
        let currentQuote = quotes[counter];
        quote.innerText = currentQuote;

        let currentPerson = persons[counter];
        person.innerText = currentPerson;

        counter++;
    }
    
    else {
        counter = 0;
    }
});

// Quote addition implementation

const addQuoteButton = document.querySelector("#new-user-quote");

addQuoteButton.addEventListener("click", function () {
    let userPerson = window.prompt("Enter an author name:");
    let userQuote = window.prompt("Enter a quote:");
    persons.push(userPerson);
    quotes.push(userQuote);
})

const deleteQuoteButton = document.querySelector("#delete-user-quote");

addQuoteButton.addEventListener("click", function () {
    let userPerson = window.prompt("Enter an author name:");
    let userQuote = window.prompt("Enter a quote:");
    persons.push(userPerson);
    quotes.push(userQuote);
})
