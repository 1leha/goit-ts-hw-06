const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

console.log(refs.input);
refs.input.addEventListener("input", () => {
  refs.output.textContent =
    refs.input.value === ""
      ? "Anonymous"
      : (refs.output.textContent = refs.input.value);
});
