function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pageRef = document.querySelector("html");
const bodyRef = document.querySelector('.body')
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

function changeBodyColor() {
  pageRef.lastChild.style.backgroundColor = getRandomHexColor();
}

buttonRef.addEventListener('click', changeBodyColor)
