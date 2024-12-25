document.addEventListener('DOMContentLoaded', function () {

    function name() {
        let input = "";
        while (input === "") {
            input = prompt("What's your name ?");
        }
        if (confirm("Are you sure " + input + " is your name ?")) {
            return input;
        } else {
            return false
        }
    }
    
    whiteSpace = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
    whiteSpace.addEventListener('click', function () {
        let txt = name();
        if (txt !== false) {
            whiteSpace.innerHTML = "Hello " + txt + "!";
        }
    });
});