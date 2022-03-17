const data = {
    input: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};
const textLimits = {
    minSize: data.input.getAttribute('min'),
    maxSize: data.input.getAttribute('max'),
}

data.input.addEventListener('input', onInputChange);

function onInputChange(event) {
   const currentValue = event.currentTarget.value;
   if(currentValue >= textLimits.minSize && currentValue <= textLimits.maxSize) {data.textEl.style.fontSize = `${currentValue}px`};
};