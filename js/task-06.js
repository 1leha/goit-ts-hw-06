const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", () => {
  console.log("inputRef.value.length :>> ", inputRef.value.length);

  // 1. Right variant: working every time you input somthing

  const isLengthCorrect = inputRef.value.length <= inputRef.dataset.length;

  if (isLengthCorrect) {
    inputRef.classList.add("valid");
    inputRef.classList?.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList?.remove("valid");
  }

  // 2. Short variant: one input and refresh page
  // inputRef.value.length <= inputRef.dataset.length
  //   ? inputRef.classList.add("valid")
  //   : inputRef.classList.add("invalid");
});
