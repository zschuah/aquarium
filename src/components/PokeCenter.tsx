import { useDispatch } from "react-redux";
import { AppDispatch, addPoke } from "../store";

const PokeCenter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddPokemon = () => {
    dispatch(addPoke());
  };

  return (
    <section className="border p-4 space-y-2">
      <h2>Pokemon Center</h2>
      <button
        onClick={handleAddPokemon}
        className="btn btn-primary"
        // disabled={isLoading}
      >
        {/* {isLoading && <span className="loading"></span>} */}
        Add pokemon to center
      </button>

      {/* <div>
        {fishList.map((fish) => (
          <AquaItem
            key={fish.id}
            aqua={fish}
            handleRemoveAqua={handleRemoveFish}
          />
        ))}
      </div> */}
    </section>
  );
};

export default PokeCenter;
