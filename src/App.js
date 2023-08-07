import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Onboarding } from "./screens/Onboarding";
import { Profiling } from "../src/screens/Profiling/screens/Profiling";
import { Home } from "../src/screens/Home/screens/Home";
import { Customisation } from "../src/screens/Customisation/screens/Customisation";
import { IfTheyHave } from "../src/screens/IfTheyHave/screens/IfTheyHave";
import { Recipe } from "./screens/Recipe/screens/Recipe/Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/profiling" element={<Profiling />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customization" element={<Customisation />} />
        <Route path="/results" element={<IfTheyHave />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
