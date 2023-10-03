import "./App.css";
import CrocTank from "./components/CrocTank";
import FishTank from "./components/FishTank";

function App() {
  return (
    <div className="App">
      <div className="flex items-center gap-4">
        <h1>Aquarium</h1>
        <button className="btn btn-secondary">Reset aquarium</button>
      </div>

      <div className="mt-8 space-y-4">
        <FishTank />
        <CrocTank />
      </div>
    </div>
  );
}

export default App;
