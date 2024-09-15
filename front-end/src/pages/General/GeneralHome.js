// src/pages/GeneralHome.js
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const GeneralHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

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
          </a>
        </div>
      </div>

      {/* Öne Çıkan Özellikler */}
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
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </div>

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
          </a>
        </div>
      </div>

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
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneralHome;
