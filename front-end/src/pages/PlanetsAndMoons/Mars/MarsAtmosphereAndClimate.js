import React from "react";
import Header from "../../../components/Header/Header"; // Header componentini içe aktar
import Footer from "../../../components/Footer/Footer";
//import styles from './MarsAtmosphereAndClimate.module.css'; // Bu sayfaya özel CSS dosyası

const MarsAtmosphereAndClimate = () => (
  <div>
    <Header
      title="Mars Atmosferi ve İklimi"
      subtitle="Mars'ın atmosferi ve iklimini ayrıntılı veriler ve görselleştirmelerle keşfedin."
    />
    {/* Sayfanın geri kalan içeriği */}
    <Footer /> {/* Footer componentini ekle */}
  </div>
);

export default MarsAtmosphereAndClimate;
