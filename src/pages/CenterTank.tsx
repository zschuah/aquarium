import CrocTank from "../components/CrocTank";
import FishTank from "../components/FishTank";
import PokeCenter from "../components/PokeCenter";

const CenterTank = () => {
  return (
    <div className="mt-8 space-y-4">
      <PokeCenter />
      <FishTank />
      <CrocTank />
    </div>
  );
};

export default CenterTank;
