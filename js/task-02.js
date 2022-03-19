const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getItems = elements => {
  return elements.map(element => {
const item = document.createElement('li');
item.classList.add('item');
item.textContent = element;
console.log(item);
return item;
});
};

const items = getItems(ingredients);
const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...items);