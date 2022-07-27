const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = inputRef.value + "px";

const textSize = function() {
textRef.style.fontSize = inputRef.value + 'px'
}

inputRef.addEventListener("input", textSize);