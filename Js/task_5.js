const inputNameRef = document.querySelector("input#name-input");
const outputNameRef = document.querySelector("span#name-output");
inputNameRef.addEventListener("input", onInputChanges);

const emptyString = "";

function onInputChanges(event) {
  if (event.currentTarget.value === emptyString) {
    outputNameRef.textContent = "Незнакомец";
  }
  outputNameRef.textContent = event.currentTarget.value;
}
