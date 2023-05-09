// esercizio 1

const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

myButton.addEventListener("click", function () {
  myText.textContent = "Ciao! Benvenuto nel mio sito.";
});

// esercizio 2

const form = document.querySelector("form");
const inputField = document.querySelector("#inputField");
const submitButton = document.querySelector("#submitButton");
const outputDiv = document.querySelector("#output");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // previene il comportamento di default della form

  const inputValue = inputField.value;
  outputDiv.textContent = inputValue;

  // resetta il campo di input dopo l'invio
  inputField.value = "";
});

// Avanzato

const inputForm = document.querySelector("#inputForm");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");

addButton.addEventListener("click", function () {
  if (inputForm.value === "") {
    return;
  }
  const newListItem = document.createElement("li");
  newListItem.textContent = inputForm.value;
  list.appendChild(newListItem);
  inputForm.value = "";
});
