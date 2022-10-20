import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const getAddAction = (text) => ({ type: ADD, id: Date.now(), text });
export const getDeleteAction = (id) => ({ type: DELETE, id });

const reducer = (state = [], { type, ...data }) => {
  switch (type) {
    case ADD:
      return [data, ...state];
    case DELETE:
      return state.filter(({ id }) => id !== data.id);
    default:
      return;
  }
};
const store = createStore(reducer);

export default store;
