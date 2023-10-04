import { useDispatch } from "react-redux";
import "./App.css";
import CrocTank from "./components/CrocTank";
import FishTank from "./components/FishTank";
import { AppDispatch, resetAquarium } from "./store";
import PokeCenter from "./components/PokeCenter";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const handleReset = () => {
    dispatch(resetAquarium());
  };

  return (
    <div className="App">
      <div className="flex items-center gap-4">
        <h1>Aquarium</h1>
        <button onClick={handleReset} className="btn btn-secondary">
          Reset aquarium
        </button>
      </div>

      <div className="mt-8 space-y-4">
        <PokeCenter />
        <FishTank />
        <CrocTank />
      </div>
    </div>
  );
}

export default App;
