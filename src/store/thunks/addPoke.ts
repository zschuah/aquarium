import { createAsyncThunk } from "@reduxjs/toolkit";
import cryptoRandomString from "crypto-random-string";
import { PokeType } from "../slices/pokeSlice";
import { URL_POKEMON } from "../../utils/constants";

export const addPoke = createAsyncThunk(
  "poke/fetch",
  async (pokeId: number) => {
    const res = await fetch(URL_POKEMON + pokeId);
    const data = await res.json();

    const newPoke: PokeType = {
      id: cryptoRandomString({ length: 6, type: "distinguishable" }),
      pokeId: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
    };

    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return newPoke;
  }
);
