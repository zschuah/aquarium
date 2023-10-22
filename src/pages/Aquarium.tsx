import { useDispatch } from "react-redux";
import CrocTank from "../components/aquarium/CrocTank";
import FishTank from "../components/aquarium/FishTank";
import PokeCenter from "../components/aquarium/PokeCenter";
import { AppDispatch, resetAquarium } from "../store";

const Aquarium = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleReset = () => {
    dispatch(resetAquarium());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 mb-8">
        <h1>Aquarium</h1>
        <button onClick={handleReset} className="btn btn-secondary">
          Reset aquarium
        </button>
      </div>

      <PokeCenter />
      <FishTank />
      <CrocTank />
    </div>
  );
};

export default Aquarium;
