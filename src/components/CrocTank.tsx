import { faker } from "@faker-js/faker";
import cryptoRandomString from "crypto-random-string";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AquaCard from "../layout/AquaCard";
import { AppDispatch, RootState, addCroc, removeCroc } from "../store";
import { URL_UNSPLASH_RANDOM } from "../utils/constants";
import AquaItem from "./AquaItem";

const CrocTank = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const crocList = useSelector((state: RootState) => state.croc);

  const handleAddCroc = async () => {
    setIsLoading(true);
    const res = await fetch(URL_UNSPLASH_RANDOM + "crocodile");
    const newCroc = {
      id: cryptoRandomString({ length: 6, type: "distinguishable" }),
      name: faker.animal.crocodilia(),
      image: res.url,
    };

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(addCroc(newCroc));
    setIsLoading(false);
  };

  const handleRemoveCroc = (id: string) => {
    dispatch(removeCroc(id));
  };

  return (
    <AquaCard>
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
            handleRemoveAqua={handleRemoveCroc}
          />
        ))}
      </div>
    </AquaCard>
  );
};

export default CrocTank;
