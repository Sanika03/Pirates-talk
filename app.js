var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("output-div");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function getUrl(input){
    return serverurl + "?" + "text=" + input;
}