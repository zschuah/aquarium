import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CenterTank from "./pages/CenterTank";
import DailyRandom from "./pages/DailyRandom";
import { AppDispatch, resetAquarium } from "./store";

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

      <Routes>
        <Route path="/" element={<CenterTank />} />
        <Route path="/daily" element={<DailyRandom />} />
      </Routes>
    </div>
  );
}

export default App;
