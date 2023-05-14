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

// Avanzato

// Definizione di elementi HTML tramite la funzione createElement()
const contenitorEl = cE("div"); // Contenitore padre
const todoListEl = cE("div"); // Contenitore per l'elenco delle attività
const addTaskEL = cE("div"); // Contenitore per la casella di input e il pulsante Aggiungi
const inputEl = cE("input"); // Casella di input per l'aggiunta di nuove attività
const addButtonEl = cE("button"); // Pulsante per l'aggiunta di nuove attività
const taskContainer = cE("task-container"); // Contenitore per la lista di attività
const taskListEl = cE("ul"); // Lista delle attività

// Impostazione delle classi CSS e degli attributi per gli elementi HTML
contenitorEl.className = "contenitor-parent";
todoListEl.className = "todo-container";
addTaskEL.className = "input-container";
inputEl.className = "input-element";
addButtonEl.className = "add-task";
taskContainer.className = "task-container";
taskListEl.className = "task-list";
inputEl.setAttribute("placeholder", "Todo Text");
addButtonEl.textContent = "Add Task";

// Aggiunta dell'evento di clic al pulsante Aggiungi
addButtonEl.addEventListener("click", () => {
  console.log(inputEl.value); // Stampa del valore della casella di input nella console

  // Controllo se la casella di input è vuota e, se sì, esco dalla funzione
  if (inputEl.value === "") {
    return;
  }

  // Creazione di un nuovo elemento per la singola attività
  const taskCardEl = cE("li");
  taskCardEl.className = "task-card";
  taskCardEl.textContent = inputEl.value;
  taskListEl.appendChild(taskCardEl); // Aggiunta dell'elemento dell'attività alla lista delle attività
  inputEl.value = ""; // Pulizia del valore della casella di input

  // Creazione di un pulsante per la rimozione dell'attività
  const removeEl = cE("button");
  removeEl.textContent = "X"; //
  removeEl.className = "remove-task";
  taskCardEl.append(removeEl); // Aggiunta del pulsante di rimozione all'elemento dell'attività
  // Aggiunta dell'evento di clic al pulsante di rimozione per rimuovere l'elemento dell'attività
  removeEl.addEventListener("click", () => {
    taskCardEl.remove();
  });
});

// Aggiunta degli elementi HTML al documento
document.body.append(contenitorEl);
contenitorEl.append(todoListEl);
todoListEl.append(addTaskEL, taskContainer);
addTaskEL.append(inputEl, addButtonEl);
taskContainer.append(taskListEl);
