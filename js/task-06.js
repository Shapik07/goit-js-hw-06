const inputRef = document.querySelector("#validation-input");
console.log(inputRef)
const lengthLine = inputRef.getAttribute("data-length");
console.log(lengthLine);



inputRef.addEventListener('blur', () => {
    if (inputRef.value < lengthLine) {
        
    }
} )