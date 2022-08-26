const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredietsList = document.querySelector("#ingredients");
const ingredientsItems = [];

ingredients.forEach(item => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList = "item";
  ingredientsItem.textContent = item;
  ingredientsItems.push(ingredientsItem);
});

ingredietsList.append(...ingredientsItems);
