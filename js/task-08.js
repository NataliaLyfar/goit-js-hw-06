const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
   event.preventDefault(); 

//    const formData = new FormData(event.currentTarget);
//    console.log(formData);
//    formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name', name);
//     console.log('onFormSubmit -> value', value);
// });

const dataEl = event.currentTarget.elements;
const email = dataEl.email.value;
const password = dataEl.password.value;
const data = {email, password};

if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
console.log(data);

  event.currentTarget.reset();
};
