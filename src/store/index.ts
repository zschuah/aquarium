import { configureStore } from "@reduxjs/toolkit";
import { resetAquarium } from "./actions";
import crocSlice from "./slices/crocSlice";
import fishSlice from "./slices/fishSlice";
import pokeSlice from "./slices/pokeSlice";

export const store = configureStore({
  reducer: {
    poke: pokeSlice.reducer,
    fish: fishSlice.reducer,
    croc: crocSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./thunks/addPoke";
export const { removePoke } = pokeSlice.actions;
export const { addFish, removeFish } = fishSlice.actions;
export const { addCroc, removeCroc } = crocSlice.actions;
export { resetAquarium };
