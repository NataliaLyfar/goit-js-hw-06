const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
const item = document.createElement('li');
item.classList.add('item');
item.textContent = ingredient;
console.log(item);
const list = document.querySelector('ul');
list.appendChild(item);
})

