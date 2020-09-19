let counterValue = 0;
const incrBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const counterValueRef = document.querySelector("#value");

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;

  console.log(
    `Воу-воу, полегче, у Вас осталось ${counterValue} неважно чего, и оно уменьшается!!!`
  );
}

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;

  console.log(
    `Великолепно, Вашими стараниями Вы заработали ${counterValue} неважно чего, но его становиться все больше и больше!`
  );
}

incrBtn.addEventListener("click", increment);
decrBtn.addEventListener("click", decrement);
