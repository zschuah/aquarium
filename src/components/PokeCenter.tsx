import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addPoke } from "../store";
import AquaItem from "./AquaItem";
import { faker } from "@faker-js/faker";

const PokeCenter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isLoading,
    data: pokeList,
    error,
  } = useSelector((state: RootState) => state.poke);

  const handleAddPokemon = () => {
    const pokeId = faker.number.int({ min: 1, max: 151 });
    dispatch(addPoke(pokeId));
  };

  return (
    <section className="border p-4 space-y-2">
      <h2>Pokemon Center</h2>
      <button
        onClick={handleAddPokemon}
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading && <span className="loading"></span>}
        Add pokemon to center
      </button>

      {error && <p>{error.message}</p>}

      <div>
        {pokeList.map((poke) => (
          <AquaItem
            key={poke.id}
            aqua={poke}
            // handleRemoveAqua={handleRemoveFish}
          />
        ))}
      </div>
    </section>
  );
};

export default PokeCenter;
