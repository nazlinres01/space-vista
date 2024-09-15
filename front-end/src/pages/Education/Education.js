import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: "url('/path-to-space-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
              Uzay Eğitimi ile Bilimsel Ufukları Keşfedin
            </h1>
            <p className="text-xl mb-8 drop-shadow-md">
              Uzayın derinliklerine dair kapsamlı eğitimlerle geleceğe adım
              atın. Uzay bilimleri, astrofizik, yapay zeka ve veri analizi ile
              evrenin sırlarını öğrenin.
            </p>
            <a
              href="#courses"
              className="bg-yellow-500 hover:bg-yellow-600 py-3 px-8 rounded-lg font-semibold text-gray-900 shadow-lg transition-colors duration-300"
            >
              Uzay Eğitimlerini Keşfet
            </a>
          </div>
        </div>
      </div>

      {/* Eğitim Kategorileri */}
      <div id="courses" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Uzay Eğitim Kategorileri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Kategori Kartları */}
          {[
            {
              title: "Astrofizik",
              description:
                "Yıldızların, galaksilerin ve evrenin yapısını anlamak için astrofizik teorilerini öğrenin.",
              img: "/path-to-astro-image.jpg",
            },
            {
              title: "Uzay Keşifleri",
              description:
                "Mars misyonlarından Jüpiter'e kadar, insanoğlunun uzayda yaptığı keşifler hakkında bilgi edinin.",
              img: "/path-to-space-exploration.jpg",
            },
            {
              title: "Yapay Zeka ve Uzay",
              description:
                "Yapay zeka ile uzay verilerini analiz edin. Gelecekteki uzay araştırmalarında yapay zekanın rolünü keşfedin.",
              img: "/path-to-ai-space.jpg",
            },
            {
              title: "Gezegen Bilimi",
              description:
                "Güneş Sistemi'ndeki gezegenlerin yapısı, oluşumu ve yaşanabilirliği hakkında bilgi sahibi olun.",
              img: "/path-to-planet-science.jpg",
            },
            {
              title: "Yıldızların Evrimi",
              description:
                "Bir yıldızın nasıl doğup öldüğünü, kara deliklerin nasıl oluştuğunu öğrenin.",
              img: "/path-to-star-evolution.jpg",
            },
            {
              title: "Uzayda Yaşam ve Astrobiyoloji",
              description:
                "Uzaydaki yaşam olasılıklarını, astrobiyolojiyi ve diğer gezegenlerde yaşam arayışlarını inceleyin.",
              img: "/path-to-astrobiology.jpg",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
                >
                  <span>Daha Fazla Bilgi</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 9.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 111.414-1.414l4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sertifikalar ve Avantajlar */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">
            Sertifikalar ve Avantajlar
          </h2>
          <p className="text-xl mb-16">
            Eğitimlerimizi tamamladığınızda, uluslararası geçerliliğe sahip
            sertifikalar kazanın ve kariyerinizi bir adım öne taşıyın. Uzay
            bilimlerinde profesyonel bir gelecek inşa edin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Kart 1: Uluslararası Sertifikalar */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="/path-to-cert-icon.svg"
                  alt="Certification Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-2xl font-bold">
                  Uluslararası Sertifikalar
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Uzay bilimlerinde ve yapay zekada uluslararası geçerliliğe sahip
                sertifikalar kazanın.
              </p>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-500 font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Daha Fazla Bilgi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 9.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 111.414-1.414l4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Kart 2: Kariyer Gelişimi */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="/path-to-career-icon.svg"
                  alt="Career Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-2xl font-bold">Kariyer Gelişimi</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Uzay ve teknoloji sektörlerinde profesyonel kariyer fırsatlarını
                yakalayın.
              </p>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-500 font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Daha Fazla Bilgi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 9.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 111.414-1.414l4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Kart 3: Uzay Bilimleri Uzmanlığı */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="/path-to-space-icon.svg"
                  alt="Space Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-2xl font-bold">Uzmanlık</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Uzay bilimlerinde uzmanlaşarak, projelerde liderlik edin ve
                inovasyona öncülük yapın.
              </p>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-500 font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Daha Fazla Bilgi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 9.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 111.414-1.414l4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
