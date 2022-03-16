const menuCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', menuCategories.length);

menuCategories.forEach(category => {
    const titleOfCategories = category.querySelector('h2');
    console.log('Category:', titleOfCategories.innerHTML);
    const categoryEl = category.querySelectorAll('li');
    console.log('Elements:', categoryEl.length);
});


