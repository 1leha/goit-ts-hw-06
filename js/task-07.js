const refs = {
  sliderFontSize: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.sliderFontSize.addEventListener("input", () => {
  refs.text.style.fontSize = `${refs.sliderFontSize.value}px`;
});
