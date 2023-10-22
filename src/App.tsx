import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Aquarium from "./pages/Aquarium";
import DailyRandom from "./pages/DailyRandom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Aquarium />} />
          <Route path="/daily" element={<DailyRandom />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
