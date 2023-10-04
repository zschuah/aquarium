import { faker } from "@faker-js/faker";
import cryptoRandomString from "crypto-random-string";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addFish } from "../store";
import FishItem from "./FishItem";

const FishTank = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const fishList = useSelector((state: RootState) => state.fish);

  const handleAddFish = async () => {
    setIsLoading(true);
    const res = await fetch("https://source.unsplash.com/random/?fish");
    const newFish = {
      id: cryptoRandomString({ length: 6, type: "distinguishable" }),
      name: faker.animal.fish(),
      image: res.url,
    };

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addFish(newFish));
    setIsLoading(false);
  };

  return (
    <section className="border p-4">
      <h2>Fish Tank</h2>
      <button
        onClick={handleAddFish}
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading && <span className="loading"></span>}
        Add fish to tank
      </button>

      {fishList.map((fish) => (
        <FishItem key={fish.id} fish={fish} />
      ))}
    </section>
  );
};

export default FishTank;