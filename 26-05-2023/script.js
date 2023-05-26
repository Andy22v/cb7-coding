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

let listItem = JSON.parse(localStorage.getItem("listItem")) || [];

const addElement = () => {
  if (inputEl.value === "") {
    alert("Write a task");
    return;
  }
  const listEl = document.createElement("li");

  listEl.className = "list-todo";
  listEl.textContent = inputEl.value;

  todoEl.append(listEl);
  const taskId = Date.now();
  listItem.push({ id: taskId, content: inputEl.value });
  inputEl.value = "";
  localStorage.setItem("listItem", JSON.stringify(listItem));
  console.log(listItem);

  listEl.addEventListener("click", () => {
    listItem = listItem.filter((todo) => todo.id !== taskId);
    listEl.remove();
    localStorage.setItem("listItem", JSON.stringify(listItem));
  });
};

listItem.forEach((task) => {
  const listEl = document.createElement("li");

  listEl.className = "list-todo";
  listEl.textContent = task.content;

  todoEl.append(listEl);

  listEl.addEventListener("click", () => {
    listItem = listItem.filter((todo) => todo.id !== task.id);
    listEl.remove();
    localStorage.setItem("listItem", JSON.stringify(listItem));
  });
});

btnEl.addEventListener("click", () => {
  addElement();
});

contInputEl.append(inputEl, btnEl);
todoCartEl.append(contInputEl, todoEl);
wraperEl.append(todoCartEl);
