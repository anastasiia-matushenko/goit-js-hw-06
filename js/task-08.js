const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
    evt.preventDefault();

    const formElements = evt.currentTarget.elements;
    
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail && password) {
        const mailName = formElements.email.name;
        const passwordName = formElements.password.name;
        const formData = {
            [mailName]: mail,
            [passwordName]: password,
        };
        console.log(formData);
        form.reset(); 
    } else {
        const message = "Please, fill in form fields!";
        alert(message);
    }
};