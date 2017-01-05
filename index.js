function onchangeHandler() {
    var numberOfItems = document.getElementById("myForm").elements.length;
    var textToTranslate = document.getElementById("myForm").elements[0].value;
    var languageCode = document.getElementById("myForm").elements[1].value;
    translator(textToTranslate, languageCode);
    //console.log(textToTranslate);
    // console.log(languageCode);
}

function translator(str, langCode) {
    if (str.length == 0) {
        document.getElementById("text").innerHTML = "";
        return;
    }
    else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("translatedText").innerHTML = this.responseText.replace(/<(?:.|\n)*?>/gm, '').trim();
            }
        };
        // xmlhttp.open("GET", "translate.php?q=" + str + "&" + "langCode=" + langCode);
        xmlhttp.open("GET", "http://sandeepbalramsatone.com/texttranslator/translate.php?q=" + str + "&" + "langCode=" + langCode, true);
        console.log(langCode);
        console.log(str);
        xmlhttp.send();
    }
}
// This will translate from voice to text
function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function (e) {
            document.getElementById('technosandy').value = e.results[0][0].transcript;
            recognition.stop();
            // translator(document.getElementById('technosandy').value);
            onchangeHandler();
        };
        recognition.onerror = function (e) {
            recognition.stop();
        }
    }
}