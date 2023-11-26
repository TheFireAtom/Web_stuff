
document.getElementById("submitButton").onclick = function() {

    let temp;

    temp = document.getElementById("myTextBox").value;

    if (document.getElementById("cButton").checked) {
        document.getElementById("tempLabel").innerHTML = Math.round(Number(toCelsius(temp))) + "°C";
    }
    
    else if (document.getElementById("fButton").checked) {
        document.getElementById("tempLabel").innerHTML = Math.round(Number(toFahrenheit(temp))) + "°F";
    }
 
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp) {

    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}