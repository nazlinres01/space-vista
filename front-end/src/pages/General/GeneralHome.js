// src/pages/GeneralHome.js
<<<<<<< HEAD
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
=======
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import DataScopeCard from "../../components/DataScopeCard/DataScopeCard";
import texts from "../../data/texts.json"
>>>>>>> nazli

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

<<<<<<< HEAD
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/path-to-space-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-6xl font-bold mb-6">
            Uzay Verisi ve Görselleştirme Platformu
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Entegrasyonu ve dijital veri analiziyle dolu bu platform, uzay
            bilimleri araştırmalarına yeni bir boyut kazandırıyor. Hem bilim
            insanları hem de uzay meraklıları için eşsiz bir deneyim sunuyoruz.
          </p>
          <a
            href="#features"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Keşfetmeye Başla
=======
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
>>>>>>> nazli
          </a>
        </div>
      </div>

      {/* Öne Çıkan Özellikler */}
<<<<<<< HEAD
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Öne Çıkan Özellikler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Geniş Veri Havuzu</h3>
              <p>
                Uluslararası uzay ajanslarından ve araştırma merkezlerinden
                toplanan devasa veri kaynaklarını keşfedin.
              </p>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                Etkileşimli Görselleştirme
              </h3>
              <p>
                Uzay verilerini kullanıcı dostu ve etkileşimli görsellerle
                keşfedin, analiz edin ve öğrenin.
              </p>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                Eğitim ve Bilimsel Araçlar
              </h3>
              <p>
                Uzay bilimlerinde profesyonel bir kariyer için gerekli araçlar
                ve eğitim içeriklerine erişim sağlayın.
              </p>
            </div>
=======
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">
            Öne Çıkan Özellikler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                link={feature.link}
              />
            ))}
>>>>>>> nazli
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Veri Kapsamı Bölümü */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Uzay Verisi ve Kapsamı
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Güneş ve Güneş Sistemi
              </h3>
              <p>
                Güneş lekeleri, koronal kütle atımları ve güneş rüzgarları gibi
                dinamik süreçlerle ilgili verileri inceleyin.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Gezegen Bilimi</h3>
              <p>
                Gezegenlerin yüzey özellikleri, atmosfer yapıları ve hareketleri
                hakkında detaylı bilgi edinin.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Yıldızlar ve Galaksiler
              </h3>
              <p>
                Yıldızların evrimi ve galaksilerin dinamikleri üzerine veri ve
                görselleştirme araçlarını keşfedin.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Uzaydaki Yaşam</h3>
              <p>
                Uzayda yaşam koşulları ve Mars ile ötegezegenlerdeki yaşam
                arayışları üzerine araştırmalar.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Uzay Yolculuğu ve Keşif
              </h3>
              <p>
                İnsanlı ve insansız uzay misyonları, roketler ve uzay
                teknolojileri hakkında veriler.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Kozmik Olaylar</h3>
              <p>
                Süpernovalar, kara delikler ve galaksi birleşmeleri gibi kozmik
                fenomenler hakkında bilgi.
              </p>
            </div>
=======
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
>>>>>>> nazli
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Eğitim ve Araçlar */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">
            Eğitim Araçları ve Bilimsel İmkanlar
          </h2>
          <p className="text-lg mb-12">
            Uzay bilimleri ve teknolojilerine yönelik eğitici materyaller ve
            gelişmiş bilimsel araçlarla kendinizi geliştirin. Hem profesyonel
            bilim insanları hem de öğrenciler için özel olarak tasarlandı.
          </p>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 py-3 px-8 rounded-lg font-semibold text-gray-900 shadow-lg transition-colors duration-300"
          >
            Daha Fazla Bilgi Edinin
=======
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
>>>>>>> nazli
          </a>
        </div>
      </div>

<<<<<<< HEAD
      {/* Call to Action */}
      <div className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Uzay Verisini Keşfetmeye Hazır Mısınız?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Uzayın derinliklerine dair bilgi edinmek, bilimsel araştırmalarınıza
            güç katmak ya da uzay merakınızı gidermek için hemen platformumuza
            katılın.
          </p>
          <a
            href="/kayit-ol"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Şimdi Katıl
=======
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
>>>>>>> nazli
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneralHome;
