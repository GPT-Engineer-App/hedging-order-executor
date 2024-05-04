import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HedgingSimulation from './pages/HedgingSimulation.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/hedging-simulation" element={<HedgingSimulation />} />
      </Routes>
    </Router>
  );
}

export default App;
