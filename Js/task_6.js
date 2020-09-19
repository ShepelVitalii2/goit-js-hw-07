const inputValidationRef = document.querySelector("input#validation-input");
const inputValidLength = +inputValidationRef.dataset.length; // справа переменная приводится к числу, хм..=)
inputValidationRef.addEventListener("blur", onLengthCheck);

function onLengthCheck(event) {
  return event.currentTarget.value.length === inputValidLength
    ? inputValidationRef.classList.add("valid") +
        inputValidationRef.classList.remove("invalid")
    : inputValidationRef.classList.add("invalid") +
        inputValidationRef.classList.remove("valid");
}
