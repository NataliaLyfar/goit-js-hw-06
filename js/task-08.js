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

const { elements: { email, password } } = event.currentTarget;

if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};
