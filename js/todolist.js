const todoForm = document.querySelector(".right-page__column__todo__form");
const todoInput = document.querySelector(
  ".right-page__column__todo__form > input"
);
const todoList = document.querySelector(
  ".right-page__column__todo__form__list"
);

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
  if (todos.length === 5) {
    todoInput.classList.remove("hidden");
  }
}

function clickedCheckbox(event) {
  event.target.parentElement.childNodes[1].classList.toggle("task-done");
}

function paintTodo(todoObj) {
  if (todos.length > 5) {
    todoInput.classList.add("hidden");
  }
  const li = document.createElement("li");
  li.id = todoObj.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", clickedCheckbox);
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const i = document.createElement("i");
  i.className = "fa-solid fa-circle-minus fa-sm";
  i.addEventListener("click", deleteTodo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(i);
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: todo,
    id: Date.now(),
  };
  todos.push(todoObj);
  paintTodo(todoObj);
  saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
