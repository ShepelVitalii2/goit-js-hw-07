//1. Создать переменные для инпута, кнопок и контейнера для боксов. Навесить слушателей.
//2. Создать функцию гетЭмаунт для считывания  через "+" введенного числа. В ней должна вызываться ф-ия создающая боксы.
//3. Создаем ф-ию рандом. С помощью М.флор и М.р()*число.
//4. Создаем ф-ию дэстрой. с помощью ИннерХтмл очищаем шаблонную строку.
//5.Создаем ф-ию, создающую боксы. Начальные значения: размеры бокса, новый пустой обьект через фрагмент.
// С помощью итератора, перебираем Эмаунт. Увеличиваем размер бокса на 10. Создаем пустой тег через криейтЭлемент,
// в него записываем шаблонную строку через стайл.СиэСэСтекст. Вставляем в пустой обьект шаблонную строку.
// и все это добавляем в конец (appendChild).

const inputRef = document.querySelector("#controls input");
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const containerBox = document.querySelector("#boxes");

renderBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  let amount = +inputRef.value;
  createBoxes(amount);
}
function random() {
  return Math.floor(Math.random() * 256);
}
function destroyBoxes() {
  containerBox.innerHTML = "";
}

function createBoxes(amount) {
  let startBoxSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let boxSize = startBoxSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgba(${random()},${random()},${random()})`;
    fragment.appendChild(div);
  }
  containerBox.appendChild(fragment);
}
