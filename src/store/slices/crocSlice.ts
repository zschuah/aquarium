import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CrocType = {
  id: string;
  name: string;
  image: string;
};

const initialState: CrocType[] = [];

const crocSlice = createSlice({
  name: "croc",
  initialState,
  reducers: {
    addCroc(state, action: PayloadAction<CrocType>) {
      state.unshift(action.payload);
    },
    removeCroc(state, action) {
      //todo
    },
  },
});

export default crocSlice;
