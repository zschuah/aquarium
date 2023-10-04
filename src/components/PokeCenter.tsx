import { useDispatch } from "react-redux";
import { fetchPoke } from "../store";

const PokeCenter = () => {
  const dispatch = useDispatch();

  const handleAddPokemon = () => {
    // dispatch()
  };

  return (
    <section className="border p-4 space-y-2">
      <h2>Pokemon Center</h2>
      <button
        // onClick={handleAddFish}
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
