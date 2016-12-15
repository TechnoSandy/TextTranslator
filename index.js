    function translator(str) {
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
            //xmlhttp.open("GET", "translate.php?q=" + str, true);
            xmlhttp.open("GET", "http://sandeepbalramsatone.com/texttranslator/translate.php?q=" + str, true);
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
                translator(document.getElementById('technosandy').value)
            };
            recognition.onerror = function (e) {
                recognition.stop();
            }
        }
    }