// console.log("hello! script is working")

// input
// var username = prompt("give me username")

// processing
// var welcomeMessage="this script work!! " + username;

// output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clicHandler() {
    console.log("clicked!");
    console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click", clicHandler)