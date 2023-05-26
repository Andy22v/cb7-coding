const wraperEl = document.querySelector(".root");
const todoCartEl = document.createElement("div");
const contInputEl = document.createElement("div");
const inputEl = document.createElement("input");
const btnEl = document.createElement("button");
const todoEl = document.createElement("ul");

todoCartEl.className = "todo-cart";
contInputEl.className = "input-container";
todoEl.className = "todo-contain";
inputEl.className = "input";

btnEl.className = "add-btn";
btnEl.textContent = "add";

const addElement = () =>
  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: "Use DummyJSON in the project",
      completed: false,
      userId: 5,
    }),
  });

btnEl.addEventListener("click", () => {
  const listEl = document.createElement("li");
  const delBtn = document.createElement("button");
  listEl.className = "list-todo";
  listEl.textContent = inputEl.value;
  listEl.setAttribute = "#data-id";
  delBtn.textContent = "Delete";
  listEl.append(delBtn);
  todoEl.append(listEl);

  addElement().then((res) => {
    try {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Risposta fallita");
      }
    } catch (err) {
      console.log(err);
    }
  });

  delBtn.addEventListener("click", () => {
    fetch(`https://dummyjson.com/todos/1`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => listEl.remove());
  });

  inputEl.value = "";
});

contInputEl.append(inputEl, btnEl);
todoCartEl.append(contInputEl, todoEl);
wraperEl.append(todoCartEl);
