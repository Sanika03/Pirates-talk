var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-div");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function errorHandling(error) {
    console.log("Error occurred : " + error);
    alert("Server error occurred. Please try again later");
}

function getUrl(input) {
    return (serverUrl + "?text=" + input);
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(getUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated;
            console.log(outputText)
            outputDiv.innerText = outputText;
        })
        .catch(errorHandling);
}
btnTranslate.addEventListener("click", clickHandler);