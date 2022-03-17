function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const markerColor = document.querySelector('.color');


button.addEventListener('click', onChangeColor);

function onChangeColor () {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  markerColor.textContent = color;
}