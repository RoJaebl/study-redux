import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const getAddToDoReducerAction = (text) => ({
  type: ADD_TODO,
  id: Date.now(),
  data: text,
});
const getDeleteToDoReducerAction = (id) => ({ type: DELETE_TODO, id });

const reducer = (state = [], { type, ...data }) => {
  switch (type) {
    case ADD_TODO:
      return [data, ...state];
    case DELETE_TODO:
      return state.filter((text) => text.id !== data.id);
    default:
      return state;
  }
};
const store = createStore(reducer);
store.subscribe(() => paintToDos());

const onClick = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(getDeleteToDoReducerAction(id));
};
const paintToDos = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  for (const { id, data } of toDos) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Del";
    btn.addEventListener("click", onClick);
    li.id = id;
    li.innerText = data;
    li.appendChild(btn);
    ul.appendChild(li);
  }
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch(getAddToDoReducerAction(toDo));
};

form.addEventListener("submit", onSubmit);
