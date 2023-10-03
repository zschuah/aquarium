import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import { addFish } from "../store";

const FishTank = () => {
  const dispatch = useDispatch();

  const handleAddFish = () => {
    const fish = faker.animal.fish();
    dispatch(addFish(fish));
  };

  return (
    <section className="border p-4">
      <h2>Fish Tank</h2>
      <button onClick={handleAddFish} className="btn btn-primary">
        Add fish to tank
      </button>
    </section>
  );
};

export default FishTank;
