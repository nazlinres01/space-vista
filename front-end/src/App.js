// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MarsAtmosphereAndClimate from "./pages/PlanetsAndMoons/Mars/MarsAtmosphereAndClimate";
import MarsSurfaceAndTopography from "./pages/PlanetsAndMoons/Mars/MarsSurfaceAndTopography";
import MarsWaterResources from "./pages/PlanetsAndMoons/Mars/MarsWaterResources";
import MarsHabitability from "./pages/PlanetsAndMoons/Mars/MarsHabitability";
import MarsMissions from "./pages/PlanetsAndMoons/Mars/MarsMissions";
import MarsGeologicalTimeline from "./pages/PlanetsAndMoons/Mars/MarsGeologicalTimeline";
import MarsMoons from "./pages/PlanetsAndMoons/Mars/MarsMoons";

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
        <Route
            path="/mars-atmosphere-and-climate"
            element={<MarsAtmosphereAndClimate />}
          />
          <Route
            path="/mars-surface-and-topography"
            element={<MarsSurfaceAndTopography />}
          />
          <Route
            path="/mars-water-resources"
            element={<MarsWaterResources />}
          />
          <Route path="/mars-habitability" element={<MarsHabitability />} />
          <Route path="/mars-missions" element={<MarsMissions />} />
          <Route
            path="/mars-geological-timeline"
            element={<MarsGeologicalTimeline />}
          />
          <Route path="/mars-moons" element={<MarsMoons />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
