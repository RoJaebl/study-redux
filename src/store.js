import { configureStore, createSlice } from "@reduxjs/toolkit";

const STORE = "store";

const storage = window.localStorage;
const getItem = () => JSON.parse(storage.getItem(STORE));
const setItem = (item) => storage.setItem(STORE, JSON.stringify(item));

const toDos = createSlice({
  name: "toDosReduxer",
  initialState: getItem(),
  reducers: {
    add: (state, { type, payload }) => {
      setItem([{ id: Date.now(), text: payload }, ...state]);
      return getItem();
    },
    remove: (state, { type, payload }) => {
      setItem(state.filter(({ id }) => id !== payload));
      return getItem();
    },
  },
});

export const { add: getAddAction, remove: getDeleteAction } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
