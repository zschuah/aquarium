import cryptoRandomString from "crypto-random-string";
import { useEffect, useState } from "react";
import { PokeType } from "../store/slices/pokeSlice";
import { URL_POKEMON } from "../utils/constants";

const DailyRandom = () => {
  const [dailyPoke, setDailyPoke] = useState<PokeType>(null!);

  const handleFetchPokemon = async () => {
    const res = await fetch(URL_POKEMON + 1);
    const data = await res.json();

    const newPoke: PokeType = {
      id: cryptoRandomString({ length: 6, type: "distinguishable" }),
      pokeId: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
    };

    setDailyPoke(newPoke);
  };

  useEffect(() => {
    handleFetchPokemon();
  }, []);

  return (
    <div className="mt-8">
      <h2>Daily Random Pokemon</h2>
      <p>{dailyPoke?.name}</p>
      <img src={dailyPoke?.image} alt={dailyPoke?.name} />
    </div>
  );
};

export default DailyRandom;
