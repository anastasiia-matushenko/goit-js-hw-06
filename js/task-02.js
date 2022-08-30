const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredietsList = document.querySelector("#ingredients");
const ingredientsItems = ingredients.map(item => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList = "item";
  ingredientsItem.textContent = item;
  return ingredientsItem;
});

ingredietsList.append(...ingredientsItems);
