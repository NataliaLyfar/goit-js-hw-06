function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const basicBox = document.querySelector('#boxes');
const amountField = document.querySelector('#controls>input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

let width = 20;
let height = 20;

const createBoxes = amount => {
  for(let i=0; i < amount; i += 1){
  const box = document.createElement('div');
  width += 10;
  height += 10
  box.style.width = width + 'px';
  box.style.height = height + 'px';
  box.style.backgroundColor = getRandomHexColor();
  
  basicBox.appendChild(box);
  console.log(box);
};
};
const destroyBoxes = () => {
  const boxes = basicBox.querySelectorAll("div");
  boxes.forEach((box) => box.remove());
};

createBtn.addEventListener("click", () => createBoxes(amountField.value));
destroyBtn.addEventListener("click", destroyBoxes); 