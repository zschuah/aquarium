import { configureStore } from "@reduxjs/toolkit";
import fishSlice from "./slices/fishSlice";

export const store = configureStore({
  reducer: {
    fish: fishSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addFish, removeFish } = fishSlice.actions;
