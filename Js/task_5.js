const inputNameRef = document.querySelector("input#name-input");
const outputNameRef = document.querySelector("span#name-output");
inputNameRef.addEventListener("input", onInputChanges);

const emptyString = "";

function onInputChanges(event) {
  outputNameRef.textContent = // понял, спасибо!
    event.currentTarget.value === emptyString
      ? "Незнакомец"
      : event.currentTarget.value;
}
