import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import AquaCard from "../layout/AquaCard";
import { AppDispatch, RootState, addPoke, removePoke } from "../store";
import AquaItem from "./AquaItem";

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

  const handleRemovePokemon = (id: string) => {
    dispatch(removePoke(id));
  };

  return (
    <AquaCard>
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
            handleRemoveAqua={handleRemovePokemon}
            isPoke
          />
        ))}
      </div>
    </AquaCard>
  );
};

export default PokeCenter;
