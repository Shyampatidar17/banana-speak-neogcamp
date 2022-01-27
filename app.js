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

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"



function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandlerURL(error){
    console.log("error occured" , error)
    alert("something wrong with server! try again after some time")
}

// outputDiv.innerText= "shyam patidar";

// console.log(outputDiv)

function clicHandler() {
    // outputDiv.innerText = "amnbmnabm " + txtInput.value;
    // console.log("clicked!");
    // console.log("input" , txtInput.value);
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clicHandler)
