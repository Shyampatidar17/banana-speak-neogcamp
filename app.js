// console.log("hello! script is working")

// input
// var username = prompt("give me username")

// processing
// var welcomeMessage="this script work!! " + username;

// output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText= "shyam patidar";

// console.log(outputDiv)

function clicHandler() {
    outputDiv.innerText = "amnbmnabm " + txtInput.value;
    // console.log("clicked!");
    // console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click", clicHandler)