var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("output-div");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function getUrl(input){
    return (serverUrl + "?" + "text=" + input);
}

function clickHandler(){
    var inputText = textInput.value;
    
    fetch(getUrl(inputText))
        .then(response => response.json)
        .then(json => {
            var outputText = json.contents.translation;
            outputDiv.innerText = outputText;
        })
}