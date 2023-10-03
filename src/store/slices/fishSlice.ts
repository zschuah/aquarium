import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const fishSlice = createSlice({
  name: "fish",
  initialState,
  reducers: {
    addFish(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeFish(state, action) {
      //todo
    },
  },
});

export default fishSlice;
