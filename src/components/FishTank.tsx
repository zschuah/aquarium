import { faker } from "@faker-js/faker";
import cryptoRandomString from "crypto-random-string";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AquaCard from "../layout/AquaCard";
import { AppDispatch, RootState, addFish, removeFish } from "../store";
import { URL_UNSPLASH_RANDOM } from "../utils/constants";
import AquaItem from "./AquaItem";

const FishTank = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const fishList = useSelector((state: RootState) => state.fish);

  const handleAddFish = async () => {
    setIsLoading(true);
    const res = await fetch(URL_UNSPLASH_RANDOM + "fish");
    const newFish = {
      id: cryptoRandomString({ length: 6, type: "distinguishable" }),
      name: faker.animal.fish(),
      image: res.url,
    };

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addFish(newFish));
    setIsLoading(false);
  };

  const handleRemoveFish = (id: string) => {
    dispatch(removeFish(id));
  };

  return (
    <AquaCard>
      <h2>Fish Tank</h2>
      <button
        onClick={handleAddFish}
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading && <span className="loading"></span>}
        Add fish to tank
      </button>

      <div>
        {fishList.map((fish) => (
          <AquaItem
            key={fish.id}
            aqua={fish}
            handleRemoveAqua={handleRemoveFish}
          />
        ))}
      </div>
    </AquaCard>
  );
};

export default FishTank;
