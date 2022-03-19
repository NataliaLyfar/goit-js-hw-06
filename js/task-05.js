const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

const onInputChange = event => {
    refs.input.value = "" ? 
    refs.output.textContent = 'Anonymous' : refs.output.textContent = event.currentTarget.value;}

refs.input.addEventListener('input', onInputChange);

