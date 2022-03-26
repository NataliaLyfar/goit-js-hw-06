
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');
let counterValue = 0;

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValueUI();
    });
    
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValueUI();
    });

 function updateValueUI () {
    value.textContent = counterValue;
}
