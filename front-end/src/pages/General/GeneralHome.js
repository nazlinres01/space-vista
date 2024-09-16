// src/pages/GeneralHome.js
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const GeneralHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Bölümü */}
      <div
        className="relative bg-cover bg-center h-screen parallax"
        style={{ backgroundImage: "url('/path-to-space-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-7xl font-extrabold mb-6 drop-shadow-lg">
            Uzayı Keşfedin
          </h1>
          <p className="text-2xl mb-8 max-w-3xl leading-relaxed">
            Etkileşimli uzay verileri, güçlü görselleştirme araçları ve uzay
            keşifleriyle dolu bu platformda yerinizi alın.
          </p>
          <a
            href="#features"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Keşfetmeye Başla
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
            {/* Özellik Kartları */}
            <FeatureCard
              title="Geniş Veri Havuzu"
              description="Uluslararası uzay ajanslarından ve araştırma merkezlerinden toplanan devasa veri kaynaklarını keşfedin."
              icon="data"
            />
            <FeatureCard
              title="Etkileşimli Görselleştirme"
              description="Uzay verilerini kullanıcı dostu ve etkileşimli görsellerle keşfedin, analiz edin ve öğrenin."
              icon="visualization"
            />
            <FeatureCard
              title="Eğitim Araçları"
              description="Uzay bilimlerine yönelik profesyonel araçlara ve eğitim içeriklerine erişin."
              icon="tools"
            />
          </div>
        </div>
      </div>

      {/* Uzay Verisi ve Kapsamı */}
      <div className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">
            Uzay Verisi ve Kapsamı
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Veri Kapsam Kartları */}
            <DataScopeCard
              title="Güneş ve Güneş Sistemi"
              description="Güneş lekeleri, koronal kütle atımları ve güneş rüzgarları hakkında veriler."
            />
            <DataScopeCard
              title="Gezegen Bilimi"
              description="Gezegenlerin yüzey özellikleri, atmosfer yapıları ve hareketleri hakkında detaylı bilgi."
            />
            <DataScopeCard
              title="Yıldızlar ve Galaksiler"
              description="Yıldızların evrimi ve galaksilerin dinamikleri üzerine veri ve görselleştirme araçlarını keşfedin."
            />
            <DataScopeCard
              title="Uzaydaki Yaşam"
              description="Uzayda yaşam koşulları ve Mars ile ötegezegenlerdeki yaşam arayışları üzerine araştırmalar."
            />
            <DataScopeCard
              title="Uzay Yolculuğu ve Keşif"
              description="İnsanlı ve insansız uzay misyonları, roketler ve uzay teknolojileri hakkında veriler."
            />
            <DataScopeCard
              title="Kozmik Olaylar"
              description="Süpernovalar, kara delikler ve galaksi birleşmeleri gibi kozmik fenomenler hakkında bilgi."
            />
          </div>
        </div>
      </div>

      {/* Eğitim ve Bilimsel Araçlar */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-12">Eğitim ve Bilimsel Araçlar</h2>
          <p className="text-xl mb-16 max-w-4xl mx-auto">
            Hem bilim insanları hem de meraklılar için uzay bilimine yönelik eğitim materyalleri ve gelişmiş araçlar.
          </p>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 py-4 px-10 rounded-lg font-semibold text-gray-900 shadow-lg transition-transform transform hover:scale-105"
          >
            Daha Fazla Bilgi Edinin
          </a>
        </div>
      </div>

      {/* Harekete Geçirici Mesaj */}
      <div className="py-24 bg-white text-center mb-40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Uzay Verisini Keşfetmeye Hazır Mısınız?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Uzayın derinliklerine dair bilgi edinmek, bilimsel araştırmalarınıza güç katmak ya da uzay merakınızı gidermek için hemen platformumuza katılın.
          </p>
          <a
            href="/kayit-ol"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Şimdi Katıl
          </a>
        </div>
      </div>
    </div>
  );
};

// Özellik Kartı Bileşeni
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-900 text-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
    <div className="mb-6">
      <img src={`/icons/${icon}.svg`} alt={`${title} Icon`} className="w-16 h-16 mx-auto" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

// Veri Kapsam Kartı Bileşeni
const DataScopeCard = ({ title, description }) => (
  <div className="bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

export default GeneralHome;
