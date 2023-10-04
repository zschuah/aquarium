import { useDispatch } from "react-redux";
import { addCroc } from "../store";
import { faker } from "@faker-js/faker";
import cryptoRandomString from "crypto-random-string";
import { useState } from "react";

const CrocTank = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

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
    <section className="border p-4">
      <h2>Croc Tank</h2>
      <button
        onClick={handleAddCroc}
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading && <span className="loading"></span>}
        Add croc to tank
      </button>
    </section>
  );
};

export default CrocTank;
