import { useDispatch } from "react-redux";
import "./App.css";
import CrocTank from "./components/CrocTank";
import FishTank from "./components/FishTank";
import PokeCenter from "./components/PokeCenter";
import { AppDispatch, resetAquarium } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const handleReset = () => {
    dispatch(resetAquarium());
  };

  return (
    <div className="App">
      <div className="flex items-center gap-4 mb-8">
        <h1>Aquarium</h1>
        <button onClick={handleReset} className="btn btn-secondary">
          Reset aquarium
        </button>
      </div>

      <div className="space-y-4">
        <FishTank />
        <CrocTank />
        <PokeCenter />
      </div>
    </div>
  );
}

export default App;
