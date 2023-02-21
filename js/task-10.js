const refs = {
  input: document.getElementById("controls").children[0],
  btnCreate: document.getElementById("controls").children[1],
  btnDestroy: document.getElementById("controls").children[2],
  divBox: document.getElementById("boxes"),
};

// console.log(refs.input.value);

refs.btnCreate.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

refs.btnDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    refs.divBox.append(divEl);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  refs.divBox.innerHTML = "";
}
