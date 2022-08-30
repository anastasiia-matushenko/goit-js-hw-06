const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

    if (email.value && password.value) {
        const formData = {
            [email.name]: email.value,
            [password.name]: password.value,
        };
        console.log(formData);
        evt.currentTarget.reset(); 
    } else {
        const message = "Please, fill in form fields!";
        alert(message);
    }
};