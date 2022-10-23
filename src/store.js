import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const STORE = "store";

export const getAddAction = (text) => ({ type: ADD, id: Date.now(), text });
export const getDeleteAction = (id) => ({ type: DELETE, id });

const getItem = () => JSON.parse(storage.getItem(STORE));
const setItem = (item) => storage.setItem(STORE, JSON.stringify(item));

const reducer = (state = [], { type, ...data }) => {
  switch (type) {
    case ADD:
      setItem([data, ...state]);
      return getItem();
    case DELETE:
      setItem(state.filter(({ id }) => id !== data.id));
      return getItem();
    default:
      return getItem();
  }
};

const storage = window.localStorage;
const store = createStore(reducer);

export default store;
