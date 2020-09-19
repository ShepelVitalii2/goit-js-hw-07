const inputFontSizeControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

inputFontSizeControl.addEventListener("input", function () {
  spanText.style.fontSize = this.value + "px";
});
