const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const lengthLine = inputRef.getAttribute("data-length");
console.log(lengthLine);

inputRef.addEventListener("blur", () => {
  inputRef.value.length < lengthLine
    ? inputRef.classList.add("invalid")
    : inputRef.classList.remove("invalid"),
    inputRef.classList.add("valid");

  // if (inputRef.value.length < lengthLine) {
  //     inputRef.classList.add("invalid");
  // } else {
  //     inputRef.classList.remove("invalid");
  //     inputRef.classList.add("valid");
  // }
});

