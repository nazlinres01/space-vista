// src/pages/GeneralHome.js
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import DataScopeCard from "../../components/DataScopeCard/DataScopeCard";
import texts from "../../data/texts.json"; // JSON dosyasını import ediyoruz

const GeneralHome = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    // JSON dosyasından metinleri al
    setContent(texts);
  }, []);

  if (!content.hero) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Bölümü */}
      <div className="relative h-screen overflow-hidden">
        {/* Video arka plan */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/854233-hd_1280_720_29fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Karartma ve içerik */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-7xl font-extrabold mb-6 drop-shadow-lg">
            {content.hero.title}
          </h1>
          <p className="text-2xl mb-8 max-w-3xl leading-relaxed">
            {content.hero.description}
          </p>
          <a
            href="#features"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {content.hero.cta}
          </a>
        </div>
      </div>

      {/* Öne Çıkan Özellikler */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">
            Öne Çıkan Özellikler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {content.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Uzay Verisi ve Kapsamı */}
      <div id="data-scope" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">
            Uzay Verisi ve Kapsamı
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {content.dataScope.map((scope, index) => (
              <DataScopeCard
                key={index}
                title={scope.title}
                description={scope.description}
                link={scope.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Eğitim ve Bilimsel Araçlar */}
      <div id="education-tools" className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-12">
            {content.educationTools.title}
          </h2>
          <p className="text-xl mb-16 max-w-4xl mx-auto">
            {content.educationTools.description}
          </p>
          <a
            href="/egitim-araclari"
            className="bg-yellow-500 hover:bg-yellow-600 py-4 px-10 rounded-lg font-semibold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
          >
            {content.educationTools.cta}
          </a>
        </div>
      </div>

      {/* Harekete Geçirici Mesaj */}
      <div className="py-24 bg-white text-center mb-40 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {content.callToAction.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {content.callToAction.description}
          </p>
          <a
            href="/kayit-ol"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {content.callToAction.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneralHome;
