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

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandlerURL(error) {
    console.log("error occured", error)
    alert("something wrong with server! try again after some time")
}

// outputDiv.innerText= "shyam patidar";

// console.log(outputDiv)

function clicHandler() {
    // outputDiv.innerText = "amnbmnabm " + txtInput.value;
    // console.log("clicked!");
    // console.log("input" , txtInput.value);
    var inputText = txtInput.value;  // taking input

     //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;  //output

        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clicHandler)