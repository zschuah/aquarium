import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetAquarium } from "../actions";

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
    removeCroc(state, action: PayloadAction<string>) {
      const index = state.findIndex((croc) => croc.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetAquarium, () => {
      return [];
    });
  },
});

export default crocSlice;
