import { useEffect, useState } from "react";
import { z } from "zod";
import { URL_POKEMON } from "../utils/constants";

const pokeSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    other: z.object({
      dream_world: z.object({
        front_default: z.string(),
      }),
    }),
  }),
  weight: z.number(),
});

type PokeSchemaType = z.infer<typeof pokeSchema>;

const DailyRandom = () => {
  const [dailyPoke, setDailyPoke] = useState<PokeSchemaType | null>(null);

  const handleFetchPokemon = async () => {
    const res = await fetch(URL_POKEMON + 1);
    const data = await res.json();

    const validatedPoke = pokeSchema.safeParse(data);
    if (validatedPoke.success) {
      setDailyPoke(validatedPoke.data);
    } else {
      console.error(validatedPoke.error);
    }
  };

  useEffect(() => {
    handleFetchPokemon();
  }, []);

  if (dailyPoke) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h1>Daily Random</h1>
          <button className="btn btn-secondary">Next random</button>
        </div>

        <div>
          <p>{dailyPoke.name}</p>
          <p>{dailyPoke.weight}</p>
          <img
            src={dailyPoke.sprites.other.dream_world.front_default}
            alt={dailyPoke.name}
          />
        </div>
      </div>
    );
  }
};

export default DailyRandom;
