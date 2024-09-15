import React from "react";
import { FaRobot, FaSatellite, FaChartLine, FaDatabase } from "react-icons/fa";

const AI = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Başlık */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Uzay Veri Analizi ve Görselleştirme için Yapay Zeka
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Yapay zeka, uzay araştırmalarında büyük verilerin işlenmesi, analiz
          edilmesi ve bu verilerin görselleştirilmesi için vazgeçilmez bir araç
          haline geldi. Uzaydan toplanan verilerin anlamlandırılmasına ve bilim
          insanlarının karar verme süreçlerini hızlandırmasına yardımcı oluyor.
        </p>
      </div>

      {/* Bölüm 1: AI ve Uzay Verileri */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          AI ve Uzay Verilerinin İşlenmesi
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://example.com/space-data.jpg"
              alt="AI and Space Data Processing"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <p className="text-gray-700 mb-4">
              Yapay zeka, uzay teleskopları ve uydular tarafından toplanan
              devasa miktarda verinin analiz edilmesini sağlar. Bu veriler,
              yıldızların konumlarından gezegen atmosferlerine, kara deliklerin
              hareketlerinden kuyruklu yıldızların izlenmesine kadar birçok
              farklı kaynaktan toplanmaktadır. AI, bu büyük veri kümelerindeki
              örüntüleri bulma, tahmin yapma ve anlamlı sonuçlar elde etme
              konusunda güçlü bir araçtır.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Yıldız haritalarının AI yardımıyla analiz edilmesi.</li>
              <li>
                Exoplanet (dış gezegen) keşifleri ve sınıflandırma
                algoritmaları.
              </li>
              <li>
                Uzay teleskoplarından gelen görüntü verilerinin işlenmesi.
              </li>
              <li>AI destekli uzay veri yönetim sistemleri.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bölüm 2: AI ile Uzay Verilerinin Görselleştirilmesi */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          AI ile Uzay Verilerinin Görselleştirilmesi
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-6">
            <p className="text-gray-700 mb-4">
              Uzay verilerinin görselleştirilmesi, bu verilerin daha anlaşılır
              hale getirilmesi açısından kritik öneme sahiptir. AI, bu verilerin
              3D modeller, grafikler ve haritalar şeklinde sunulmasını sağlar.
              Bu sayede bilim insanları ve mühendisler, gözlemlerini ve
              tahminlerini daha net bir şekilde değerlendirebilir.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>AI destekli 3D yıldız ve galaksi haritaları oluşturma.</li>
              <li>Gezegen yüzeylerinin detaylı modellemeleri.</li>
              <li>
                Uzay olaylarının simülasyonları (örneğin, kara deliklerin
                çökmesi).
              </li>
              <li>
                Bilimsel verilerin grafik ve infografiklerle görselleştirilmesi.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://example.com/space-visualization.jpg"
              alt="Space Visualization"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bölüm 3: AI Destekli Keşifler ve Tahminler */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          AI Destekli Keşifler ve Tahminler
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://example.com/ai-space-discovery.jpg"
              alt="AI Space Discoveries"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <p className="text-gray-700 mb-4">
              Yapay zeka, uzay araştırmalarında bilim insanlarına yeni keşifler
              yapma fırsatları sunmaktadır. AI, büyük veri kümeleri üzerinden
              gezegenlerde yaşam belirtileri aramak, galaksiler arası ilişkileri
              anlamak ve uzay olaylarını tahmin etmek için kullanılabilir.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>
                Gezegenlerde yaşam belirtilerini keşfetmek için AI modelleri.
              </li>
              <li>Uzay araçları rotalarının optimize edilmesi.</li>
              <li>
                Astrofiziksel olayların tahmin edilmesi (gama ışınları,
                süpernovalar).
              </li>
              <li>
                Uzay madenciliği alanında AI destekli verimlilik artırma
                çözümleri.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bölüm 4: Veri Depolama ve Yönetim */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Veri Depolama ve Yönetim
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-6">
            <p className="text-gray-700 mb-4">
              Uzay araştırmalarında toplanan büyük miktarda veri, verimli bir
              şekilde yönetilmelidir. AI, bu verilerin depolanması, işlenmesi ve
              analiz edilmesi süreçlerini optimize eder.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Büyük veri kümelerinin AI destekli analizi.</li>
              <li>
                Yapay zeka ile verilerin temizlenmesi ve anlamlandırılması.
              </li>
              <li>
                Uzay veri merkezleri ve depolama sistemlerinin optimize
                edilmesi.
              </li>
              <li>
                Verilerin AI ile zaman içinde tahmin edilmesi ve analiz
                edilmesi.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://example.com/data-management.jpg"
              alt="AI Data Management"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA: Yapay Zeka ve Uzay Keşiflerine Katılın */}
      <div className="max-w-6xl mx-auto bg-blue-600 rounded-lg shadow-md p-6 text-center text-white mb-40">
        <h2 className="text-3xl font-bold mb-4">
          Yapay Zeka ve Uzay Keşiflerine Katılın!
        </h2>
        <p className="mb-6">
          Yapay zeka, uzayın sırlarını çözmek için kapılar açıyor. Siz de AI
          teknolojilerini öğrenerek uzay araştırmalarına katkıda
          bulunabilirsiniz.
        </p>
        <a
          href="/egitimler"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
        >
          Eğitimlere Göz Atın
        </a>
      </div>
    </div>
  );
};

export default AI;
