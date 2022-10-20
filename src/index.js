import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  const { type } = action;
  if (type === "ADD") {
    return (count += 1);
  } else if (type === "MINUS") {
    return (count -= 1);
  } else return count;
};

const countStore = createStore(countModifier);
console.log(countStore);
const onChange = () => (number.innerText = countStore.getState());
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
