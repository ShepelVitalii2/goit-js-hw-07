const listRef = document.querySelectorAll(".item");
console.log(`В списке есть ${listRef.length} категории: `);

listRef.forEach((item) => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    }\nКоличество элементов: ${item.querySelector("ul").children.length}`
  );
});
