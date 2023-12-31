import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetAquarium } from "../actions";

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
    removeFish(state, action: PayloadAction<string>) {
      const index = state.findIndex((fish) => fish.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetAquarium, () => {
      return [];
    });
  },
});

export default fishSlice;
