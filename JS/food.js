var input = document.getElementById("inputSpace");
var inputButton = document.getElementById("navSearch");
var icon = document.getElementById("startSearch");

function showInput() {
    input.classList.add("show")
    inputButton.classList.add("showButton");
    icon.classList.add("hide");
}

function hideInput() {
    input.classList.remove("show");
    inputButton.classList.remove("showButton");
    icon.classList.remove("hide");
}