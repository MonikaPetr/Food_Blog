var input = document.getElementById("inputSpace");
var inputButton = document.getElementById("navSearch");
var icon = document.querySelector("i");

function showInput() {
    input.classList.add("show")
    inputButton.classList.add("show");
    icon.classList.add("hide");
}

function hideInput() {
    input.classList.remove("show");
    inputButton.classList.remove("show");
    icon.classList.remove("hide");
}