import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "../../../../type";

const userSlice = createSlice({
  initialState: null,
  name: "user",
  reducers: {
    setUser: (state, action) => (state = action.payload),
  },
});

const userSelector = (state: ApplicationState) => state.user;

const { setUser } = userSlice.actions;

export { userSelector, userSlice, setUser };
