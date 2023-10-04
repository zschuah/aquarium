import { configureStore } from "@reduxjs/toolkit";
import crocSlice from "./slices/crocSlice";
import fishSlice from "./slices/fishSlice";
import { resetAquarium } from "./actions";

export const store = configureStore({
  reducer: {
    fish: fishSlice.reducer,
    croc: crocSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addFish, removeFish } = fishSlice.actions;
export const { addCroc, removeCroc } = crocSlice.actions;
export { resetAquarium };
