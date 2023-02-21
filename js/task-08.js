//? Решение согласно требований

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  //   console.log(email.value);
  //   console.log(password.value === "");

  if (email.value === "" || password.value === "") {
    alert(`All fields are required! Please fill all of it!`);
    return;
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
}

//! Решение согласно требований + стиль предупреждения - мигалка аля ZX-Specrum
// const formRef = document.querySelector(".login-form");

// formRef.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "") {
//     // console.log(email);
//     email.blinkBlink();
//     return;
//   }
//   if (password.value === "") {
//     password.blinkBlink();
//     return;
//   }

//   console.log({
//     email: email.value,
//     password: password.value,
//   });

//   event.currentTarget.reset();
// }

// // Функция-мигалка
// Object.prototype.blinkBlink = function () {
//   let counter = 3;

//   const firstColor = "red";
//   const secondColor = "white";

//   //   console.log("THIS в начале функции", this);

//   if (this.style.backgroundColor === secondColor) {
//     // this.value = "Fill me";
//     this.style.backgroundColor = firstColor;
//     this.style.color = secondColor;
//   } else {
//     this.style.backgroundColor = secondColor;
//     this.style.color = firstColor;
//   }

//   //   console.log("THIS в КОНЦЕ функции", this);

//   setTimeout(blinkBlink.bind(this), 350);
// };
