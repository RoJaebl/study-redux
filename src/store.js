import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const STORE = "store";

export const getAddAction = createAction("ADD");
export const getDeleteAction = createAction("DELETE");

const getItem = () => JSON.parse(storage.getItem(STORE));
const setItem = (item) => storage.setItem(STORE, JSON.stringify(item));

const reducer = createReducer([], (builder) => {
  builder
    .addCase(getAddAction, (state, { type, payload }) => {
      setItem([{ id: Date.now(), text: payload }, ...state]);
      return getItem();
    })
    .addCase(getDeleteAction, (state, { type, payload }) => {
      setItem(state.filter(({ id }) => id !== payload));
      return getItem();
    })
    .addDefaultCase(() => getItem());
});

const storage = window.localStorage;
const store = createStore(reducer);

export default store;
