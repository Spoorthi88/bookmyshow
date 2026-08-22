import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Theatre from "./pages/Theatre";
import Seats from "./pages/Seats";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theatre" element={<Theatre />} />
      <Route path="/seats" element={<Seats />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;