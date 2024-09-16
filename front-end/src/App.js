import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Planets and Moons Pages
import MarsAtmosphereAndClimate from "./pages/Topics/PlanetsAndMoons/Mars/MarsAtmosphereAndClimate";
import MarsSurfaceAndTopography from "./pages/Topics/PlanetsAndMoons/Mars/MarsSurfaceAndTopography";
import MarsWaterResources from "./pages/Topics/PlanetsAndMoons/Mars/MarsWaterResources";
import MarsHabitability from "./pages/Topics/PlanetsAndMoons/Mars/MarsHabitability";
import MarsMissions from "./pages/Topics/PlanetsAndMoons/Mars/MarsMissions";
import MarsGeologicalTimeline from "./pages/Topics/PlanetsAndMoons/Mars/MarsGeologicalTimeline";
import MarsMoons from "./pages//Topics/PlanetsAndMoons/Mars/MarsMoons";
import MarsHome from "./pages/Topics/PlanetsAndMoons/Mars/MarsHome";
import PlanetsAndMoonsHome from "./pages/Topics/PlanetsAndMoons/PlanetsAndMoonsHome";

import EarthAtmosphereAndClimate from "./pages/Topics/PlanetsAndMoons/Earth/EarthAtmosphereAndClimate";
import EarthSurfaceAndTopography from "./pages/Topics/PlanetsAndMoons/Earth/EarthSurfaceAndTopography";
import EarthWaterResources from "./pages/Topics/PlanetsAndMoons/Earth/EarthWaterResources";
import EarthHabitability from "./pages/Topics/PlanetsAndMoons/Earth/EarthHabitability";
import EarthMissions from "./pages/Topics/PlanetsAndMoons/Earth/EarthMissions";
import EarthGeologicalTimeline from "./pages/Topics/PlanetsAndMoons/Earth/EarthGeologicalTimeline";
import EarthMoons from "./pages/Topics/PlanetsAndMoons/Earth/EarthMoons";
import EarthHome from "./pages/Topics/PlanetsAndMoons/Earth/EarthHome";
import Layout from "./components/Layout/Layout"; // Layout bileşenini içe aktar
import GeneralHome from "./pages/General/GeneralHome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Education from "./pages/Education/Education";
import AI from "./pages/AI/AI";
import { TopicsHome } from "./pages/Topics/TopicsHome/TopicsHome";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>


        <Route path="/" element={<GeneralHome />} />
        <Route path="/egitimler" element={<Education />} />
        <Route path="/yapay-zeka" element={<AI />} />
        <Route path="/konular" element={<TopicsHome/>} />
        <Route path="/giris" element={<Login />} />
        <Route path="/kayit-ol" element={<Register />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkinda" element={<About />} />



  
          <Route
            path="/konular/gezegenler-ve-uydular/"
            element={<PlanetsAndMoonsHome />}
          />

          {/* Planets and Moons Routes */}
          <Route path="/konular/gezegenler-ve-uydular/mars" element={<MarsHome />} />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-atmosferi-ve-iklimi"
            element={<MarsAtmosphereAndClimate />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-yuzeyi-ve-topografyasi"
            element={<MarsSurfaceAndTopography />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-su-kaynaklari"
            element={<MarsWaterResources />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-yasanabilirligi"
            element={<MarsHabitability />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-gorevleri"
            element={<MarsMissions />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-jeolojik-zaman-cizelgesi"
            element={<MarsGeologicalTimeline />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/mars/mars-uydulari"
            element={<MarsMoons />}
          />

          <Route path="/konular/gezegenler-ve-uydular/dunya" element={<EarthHome />} />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-atmosferi-ve-iklimi"
            element={<EarthAtmosphereAndClimate />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-yuzeyi-ve-topografyasi"
            element={<EarthSurfaceAndTopography />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-su-kaynaklari"
            element={<EarthWaterResources />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-yasanabilirligi"
            element={<EarthHabitability />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-gorevleri"
            element={<EarthMissions />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-jeolojik-zaman-cizelgesi"
            element={<EarthGeologicalTimeline />}
          />
          <Route
            path="/konular/gezegenler-ve-uydular/dunya/dunya-uydulari"
            element={<EarthMoons />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
