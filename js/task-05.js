const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", (evt) => {
    if (!evt.currentTarget.value) {
        userName.textContent = "Anonymous";
    } else {
        userName.textContent = evt.currentTarget.value;
    }
});