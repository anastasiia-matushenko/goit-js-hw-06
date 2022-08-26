const input = document.querySelector("#validation-input");

input.addEventListener("blur", (evt) => {
    const validLength = evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length);
   
    if (validLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});