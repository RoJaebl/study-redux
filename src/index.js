import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const reducer = (state = [], { type }) => {
  return type;
};
const store = createStore(reducer);
store.subscribe(() => paintToDos());

const paintToDos = () => {
  const li = document.createElement("li");
  const toDos = store.getState();
  li.innerText = toDos;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: toDo });
};

form.addEventListener("submit", onSubmit);
