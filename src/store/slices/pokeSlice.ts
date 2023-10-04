import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { addPoke } from "../thunks/addPoke";

type PokeType = {
  id: string;
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addPoke.pending, (state, action) => {
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
  },
});

export default pokeSlice;
