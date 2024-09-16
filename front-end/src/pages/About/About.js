import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1500")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-60"></div>
          </div>
          <div className="relative z-10 text-center text-white py-16">
            <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-lg mb-8">Uzay verilerini analiz etmek ve görselleştirmek için geliştirdiğimiz entegre platform ile bilimin sınırlarını zorlayın.</p>
          </div>
        </div>

        {/* Company History */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Şirket Tarihçemiz</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                2022 yılında uzay verilerini daha erişilebilir hale getirmek için yola çıktık. Küçük bir ekip olarak başladık ve hızla global bir platform haline geldik.
              </p>
              <p className="text-lg text-gray-700">
                Şu anda, dünya çapında çeşitli araştırma merkezleriyle işbirliği yaparak kullanıcılarımıza en güncel ve kapsamlı verileri sunuyoruz.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/500"
                alt="Company History"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Misyonumuz</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Misyonumuz, uzay verilerini herkes için anlaşılır ve erişilebilir hale getirerek bilimsel araştırmaları desteklemektir. Eğitim ve araştırma alanında yenilikçi çözümler sunuyoruz.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Vizyonumuz</h2>
                <p className="text-lg text-gray-700">
                  Vizyonumuz, uzay bilimleri alanında küresel bir lider olmak ve ileri teknolojiler kullanarak bilimsel verilerin anlaşılmasını ve kullanılmasını kolaylaştırmaktır.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ekibimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-700">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Johnson</h3>
              <p className="text-gray-700">CMO</p>
            </div>
          </div>
        </div>

        {/* Contact Call-to-Action */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-lg mb-6">Sorularınız veya işbirlikleri için bizimle iletişime geçmekten çekinmeyin.</p>
            <a
              href="/iletisim"
              className="bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              İletişim Sayfasına Git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
