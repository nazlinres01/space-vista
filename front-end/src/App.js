import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Planets and Moons Pages
import MarsAtmosphereAndClimate from './pages/PlanetsAndMoons/Mars/MarsAtmosphereAndClimate';
import MarsSurfaceAndTopography from './pages/PlanetsAndMoons/Mars/MarsSurfaceAndTopography';
import MarsWaterResources from './pages/PlanetsAndMoons/Mars/MarsWaterResources';
import MarsHabitability from './pages/PlanetsAndMoons/Mars/MarsHabitability';
import MarsMissions from './pages/PlanetsAndMoons/Mars/MarsMissions';
import MarsGeologicalTimeline from './pages/PlanetsAndMoons/Mars/MarsGeologicalTimeline';
import MarsMoons from './pages/PlanetsAndMoons/Mars/MarsMoons';
import MarsHome from './pages/PlanetsAndMoons/Mars/MarsHome';

import EarthAtmosphereAndClimate from './pages/PlanetsAndMoons/Earth/EarthAtmosphereAndClimate';
import EarthSurfaceAndTopography from './pages/PlanetsAndMoons/Earth/EarthSurfaceAndTopography';
import EarthWaterResources from './pages/PlanetsAndMoons/Earth/EarthWaterResources';
import EarthHabitability from './pages/PlanetsAndMoons/Earth/EarthHabitability';
import EarthMissions from './pages/PlanetsAndMoons/Earth/EarthMissions';
import EarthGeologicalTimeline from './pages/PlanetsAndMoons/Earth/EarthGeologicalTimeline';
import EarthMoons from './pages/PlanetsAndMoons/Earth/EarthMoons';
import Footer from './components/Footer/Footer';
import EarthHome from './pages/PlanetsAndMoons/Earth/EarthHome';
import Layout from './components/Layout/Layout'; // Layout bileşenini içe aktar

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Planets and Moons Routes */}
          <Route path="gezegenler-ve-uydular/mars" element={<MarsHome />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-atmosferi-ve-iklimi" element={<MarsAtmosphereAndClimate />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-yuzeyi-ve-topografyasi" element={<MarsSurfaceAndTopography />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-su-kaynaklari" element={<MarsWaterResources />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-yasanabilirligi" element={<MarsHabitability />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-gorevleri" element={<MarsMissions />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-jeolojik-zaman-cizelgesi" element={<MarsGeologicalTimeline />} />
          <Route path="/gezegenler-ve-uydular/mars/mars-uydulari" element={<MarsMoons />} />

          <Route path="gezegenler-ve-uydular/dunya" element={<EarthHome />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-atmosferi-ve-iklimi" element={<EarthAtmosphereAndClimate />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-yuzeyi-ve-topografyasi" element={<EarthSurfaceAndTopography />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-su-kaynaklari" element={<EarthWaterResources />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-yasanabilirligi" element={<EarthHabitability />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-gorevleri" element={<EarthMissions />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-jeolojik-zaman-cizelgesi" element={<EarthGeologicalTimeline />} />
          <Route path="/gezegenler-ve-uydular/dunya/dunya-uydulari" element={<EarthMoons />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
