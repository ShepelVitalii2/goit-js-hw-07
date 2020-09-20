const inputValidationRef = document.querySelector("input#validation-input");
const inputValidLength = +inputValidationRef.dataset.length; // справа переменная приводится к числу, хм..=)
inputValidationRef.addEventListener("blur", onLengthCheck);

function onLengthCheck(event) {
  if (event.currentTarget.value.length === inputValidLength) {
    inputValidationRef.classList.add("valid") +
      inputValidationRef.classList.remove("invalid");
  } else {
    inputValidationRef.classList.add("invalid") +
      inputValidationRef.classList.remove("valid");
  }
}
