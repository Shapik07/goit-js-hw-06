function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonRef = document.querySelector("[data-create]");
const destroyButtonRef = document.querySelector("[data-destroy]");
const createNumberOfElements = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
divBoxes.createElement("div");
}