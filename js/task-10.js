function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("[type=number]");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
  
controls.addEventListener("click", (evt) => {
  if (evt.target === createBtn) {
    const amountField = input.value;
    createBoxes(amountField);
  }

  if (evt.target === destroyBtn) {
    destroyBoxes();
  }
});

function createBoxes(amount) {
  let str = "";
  for (let i = 0; i < amount; i += 1) {
    str += `<div></div>`;
  };
 
  boxes.insertAdjacentHTML("beforeend", str);

  [...boxes.children].reduce((acc, item) => {
    item.style.width = `${acc.width}px`;
    item.style.height = `${acc.height}px`;
    item.style.backgroundColor = getRandomHexColor();
    acc.width += 10;
    acc.height += 10;
    return acc;
  }, { width: 30, height: 30, });
};

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
};

 