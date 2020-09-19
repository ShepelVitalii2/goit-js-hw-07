const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.textContent = ingredient;
  return ingredientsRef;
});

ingredientsRef.append(...elements);
// console.log(ingredientsRef);
