const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", (evt) => {
    const fontSize = evt.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
});