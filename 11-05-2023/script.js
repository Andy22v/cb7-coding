const anime = [
  {
    id: 1,
    title: "Dragon Ball",
  },
  {
    id: 2,
    title: "Naruto",
  },
  {
    id: 3,
    title: "One Piece",
  },
  {
    id: 4,
    title: "Hunter x Hunter",
  },
  {
    id: 5,
    title: "Dedective Conan",
  },
  {
    id: 6,
    title: "Death Note",
  },
];

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const todosEl = cE("div");
const titleEl = cE("h1");
const todosListEl = cE("ul");

titleEl.textContent = "Anime";
anime.forEach((task) => {
  const todoCardEl = cE("li");
  todoCardEl.className = "todos-card";
  todoCardEl.textContent = task.title;
  todosListEl.appendChild(todoCardEl);
});

todosEl.className = "todos-container";
todosListEl.className = "todos-list";
titleEl.className = "title";

document.body.append(titleEl, todosEl);
todosEl.appendChild(todosListEl);
