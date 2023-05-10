// esercizio 2

const qS = (elemento) => document.querySelector(elemento);

const numbEl = qS(".number1");
const numbEl2 = qS(".number2");
const operEL = qS(".operator");
const buttomEl = qS(".result-btn");
const resultEl = qS(".result-calc");

const sum = (num1, num2) => num1 + num2;
const div = (num1, num2) => num1 / num2;
const sub = (num1, num2) => num1 - num2;
const molt = (num1, num2) => num1 * num2;

const calcBase = () => {
  const num1 = Number(numbEl.value);
  const num2 = Number(numbEl2.value);
  switch (operEL.value) {
    case "+":
      resultEl.textContent = sum(num1, num2);
      break;
    case "-":
      resultEl.textContent = sub(num1, num2);
      break;
    case "/":
      resultEl.textContent = div(num1, num2);
      break;
    case "*":
      resultEl.textContent = molt(num1, num2);
      break;
    default:
      alert("operazione sbagliata");
  }
};
buttomEl.addEventListener("click", calcBase);
