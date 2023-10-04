import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FishType = {
  id: string;
  name: string;
  image: string;
};

const initialState: FishType[] = [];

const fishSlice = createSlice({
  name: "fish",
  initialState,
  reducers: {
    addFish(state, action: PayloadAction<FishType>) {
      state.unshift(action.payload);
    },
    removeFish(state, action) {
      //todo
    },
  },
});

export default fishSlice;
