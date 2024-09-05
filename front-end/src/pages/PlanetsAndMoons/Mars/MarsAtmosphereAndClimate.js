import React from 'react';
import Header from '../../../components/Header/Header'; // Header componentini içe aktar
import Footer from '../../../components/Footer/Footer';
//import styles from './MarsAtmosphereAndClimate.module.css'; // Bu sayfaya özel CSS dosyası

const MarsAtmosphereAndClimate = () => (
  <div>
    <Header 
      title="Mars Atmosphere and Climate" 
      subtitle="Explore the atmosphere and climate of Mars through detailed data and visualizations."
    />
    {/* Sayfanın geri kalan içeriği */}
    <Footer /> {/* Footer componentini ekle */}

  </div>
);

export default MarsAtmosphereAndClimate;
