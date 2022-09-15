var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-div");
var errorDiv = document.querySelector("#error-div");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function errorHandling(error) {
    console.log("Error occurred : " + error);
    alert("Server error occurred. Please try again later");
}

function getUrl(input) {
    return (serverUrl + "?text=" + input);
}

function clickHandler() {
    if(textInput.value != ""){
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
    else{
        errorDiv.innerText = "Please enter a sentence or word"
    }
}
btnTranslate.addEventListener("click", clickHandler);