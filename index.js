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
            xmlhttp.open("GET", "translate.php?q=" + str, true);
            xmlhttp.send();
        }
    }