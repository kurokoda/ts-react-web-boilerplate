import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { exampleSlice } from "../slice/example/example";

const store = configureStore({
  reducer: combineReducers({
    example: exampleSlice.reducer,
  }),
});

store.subscribe(() => console.log(store.getState()))

export { store };
