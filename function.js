//Set the buttons' varibales
let operation = document.getElementById("operationButton");
let insight = document.getElementById("insightButton");
let critiques = document.getElementById("critiquesButton");
let awareness = document.getElementById("awarenessButton");

//Build a function that changes the button's text when clicking
function changeText(btn) {
    if (btn.innerHTML == "EXPAND") {
        btn.innerHTML = "CLOSE";
    } else {
        btn.innerHTML = "EXPAND";
    }
}

//When the click event happens
operation.onclick = function () {changeText(operation)};
insight.onclick = function() {changeText(insight)};
critiques.onclick = function() {changeText(critiques)};
awareness.onclick = function() {changeText(awareness)};
