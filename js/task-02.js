const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredientsList: document.getElementById("ingredients"),
};

const listElem = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add = "item";
  return li;
});

refs.ingredientsList.append(...listElem);
