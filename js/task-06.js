const input = document.querySelector("#validation-input");

input.addEventListener("blur", (evt) => {
    const { value, dataset } = evt.currentTarget;

    if (value.length === Number(dataset.length)) {
        evt.currentTarget.classList.remove("invalid");
        evt.currentTarget.classList.add("valid");
    } else {
        evt.currentTarget.classList.remove("valid");
        evt.currentTarget.classList.add("invalid");
    }
});