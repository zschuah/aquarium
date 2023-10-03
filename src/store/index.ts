import { configureStore } from "@reduxjs/toolkit";
import fishSlice from "./slices/fishSlice";

export const store = configureStore({
  reducer: {
    fish: fishSlice.reducer,
  },
});

export const { addFish, removeFish } = fishSlice.actions;
