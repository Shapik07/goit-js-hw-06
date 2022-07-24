const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const textSize = function() {
textRef.style.fontSize = inputRef.value + 'px'
}

inputRef.addEventListener("input", textSize);