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

let value = 30;

function createBoxes(amount) {
  const itemsBoxes = [];

 for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    item.style.width = `${value}px`;
    item.style.height = `${value}px`;
    item.style.backgroundColor = getRandomHexColor();
    
    itemsBoxes.push(item);
    value += 10;
  };

  boxes.append(...itemsBoxes);
};

function destroyBoxes() {
  value = 30;
  boxes.innerHTML = "";
  input.value = "";
};

 