import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  isLoading: boolean;
  data: any[];
  error: { message: string } | null;
} = {
  isLoading: false,
  data: [],
  error: null,
};

const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {},
});

export default pokeSlice;
