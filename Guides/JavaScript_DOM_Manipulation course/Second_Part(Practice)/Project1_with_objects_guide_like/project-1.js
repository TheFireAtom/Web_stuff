// Quote & Author change implementation

// constants

const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const button = document.querySelector("#new-quote");

// quotes

const quotes = [
    {
    quote: `"You have power over your mind – not outside events. Realize this, and you will find strength."`,
    person : ` Marcus Aurelius`
}, {
    quote: `"We suffer more often in imagination than in reality."`,
    person : ` Seneca`
}, {
    quote: `"No man is free who is not master of himself."`,
    person : ` Epictetus`
}, {
    quote: `"Man conquers the world by conquering himself."`,
    person : ` Zeno`
}, {
    quote: `"Since every man dies, it is better to die with distinction than to live long."`,
    person : ` Musonius Rufus`
}]

//New Quote Event and counter 

let counter = 0;

button.addEventListener("click", function () {

    if (counter < quotes.length) {

        quote.innerText = quotes[counter].quote;
        person.innerText = quotes[counter].person;

        counter++;
    }
    
    else {
        counter = 0;
    }
});



