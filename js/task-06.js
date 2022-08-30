const input = document.querySelector("#validation-input");

input.addEventListener("blur", (evt) => {
    const valueLength = evt.currentTarget.value.length;
    const attrLength = Number(evt.currentTarget.dataset.length);

    if (valueLength === attrLength) {
        evt.currentTarget.classList.remove("invalid");
        evt.currentTarget.classList.add("valid");
    } else {
        evt.currentTarget.classList.remove("valid");
        evt.currentTarget.classList.add("invalid");
    }
});