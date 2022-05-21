import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  initialState: {
    value: 0,
  },
  name: "example",
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

const { increment } = exampleSlice.actions;

export { exampleSlice, increment };
