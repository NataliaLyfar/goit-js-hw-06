const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
input.classList.remove('valid', 'invalid');
event.currentTarget.value.length === dataLength ? input.classList.add('valid') : input.classList.add('invalid');
};