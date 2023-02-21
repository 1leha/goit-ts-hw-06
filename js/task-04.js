let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  counter: document.getElementById("value"),

  onDecrement() {
    counterValue -= 1;
    this.counter.textContent = counterValue;
  },

  onIncrement() {
    counterValue += 1;
    this.counter.textContent = counterValue;
  },
};

refs.btnDecrement.addEventListener("click", refs.onDecrement.bind(refs));
refs.btnIncrement.addEventListener("click", refs.onIncrement.bind(refs));
