import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { resetAquarium } from "../actions";
import { addPoke } from "../thunks/addPoke";

export type PokeType = {
  id: string;
  pokeId: number;
  name: string;
  image: string;
};

const initialState: {
  isLoading: boolean;
  data: PokeType[];
  error: SerializedError | null;
} = {
  isLoading: false,
  data: [],
  error: null,
};

const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    removePoke(state, action: PayloadAction<string>) {
      const index = state.data.findIndex((poke) => poke.id === action.payload);
      state.data.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(addPoke.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      addPoke.fulfilled,
      (state, action: PayloadAction<PokeType>) => {
        state.isLoading = false;
        state.data.unshift(action.payload);
      }
    );
    builder.addCase(addPoke.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(resetAquarium, (state) => {
      state.data = [];
    });
  },
});

export default pokeSlice;
