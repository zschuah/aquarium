import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { fetchPoke } from "../thunks/fetchPoke";

const initialState: {
  isLoading: boolean;
  data: any[];
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
    builder.addCase(fetchPoke.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPoke.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.unshift(action.payload);
    });
    builder.addCase(fetchPoke.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default pokeSlice;
