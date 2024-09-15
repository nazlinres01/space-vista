// src/pages/GeneralHome.js
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


const GeneralHome = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Ana içerik */}
      <div className="p-8">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Eğitimler</h2>
          <p>
            Eğitim içeriklerimizle ilgili bölümleri buradan keşfedin. Öğrenmeye başlamak için doğru yerdesiniz.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Yapay Zeka</h2>
          <p>
            Yapay zeka hakkında derinlemesine bilgiler, makaleler ve araştırmalar. AI dünyasına dair en güncel gelişmeler burada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Konular</h2>
          <p>
            Uzay, gezegenler, yıldızlar ve diğer bilimsel konularla ilgili içerikleri burada bulabilirsiniz. Evreni keşfetmeye başlayın!
          </p>
        </section>
      </div>
    </div>
  );
};

export default GeneralHome;
