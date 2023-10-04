import { faker } from "@faker-js/faker";
import cryptoRandomString from "crypto-random-string";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addCroc } from "../store";
import AquaItem from "./AquaItem";

const CrocTank = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const crocList = useSelector((state: RootState) => state.croc);

  const handleAddCroc = async () => {
    setIsLoading(true);
    const res = await fetch("https://source.unsplash.com/random/?crocodile");
    const newCroc = {
      id: cryptoRandomString({ length: 6, type: "distinguishable" }),
      name: faker.animal.fish(),
      image: res.url,
    };

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addCroc(newCroc));
    setIsLoading(false);
  };

  return (
    <section className="border p-4 space-y-2">
      <h2>Croc Tank</h2>
      <button
        onClick={handleAddCroc}
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading && <span className="loading"></span>}
        Add croc to tank
      </button>

      <div>
        {crocList.map((croc) => (
          <AquaItem
            key={croc.id}
            aqua={croc}
            // handleRemoveAqua={handleRemoveFish}
          />
        ))}
      </div>
    </section>
  );
};

export default CrocTank;
