const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
const item = document.createElement('li');
item.classList.add('item');
item.textContent = ingredient;
console.log(item);
return item;
});

const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...items);