import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemleri burada yapılabilir
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1500")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-50"></div>
          </div>
          <div className="relative z-10 text-center text-white py-16">
            <h1 className="text-4xl font-bold mb-2">İletişim</h1>
            <p className="text-lg">Bize ulaşmak için aşağıdaki formu doldurabilir veya iletişim bilgilerimizi kullanabilirsiniz.</p>
          </div>
        </div>

        <div className="p-8">
          {isSubmitted && (
            <div className="bg-green-100 text-green-700 p-4 mb-6 rounded-lg">
              <p>Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Adınız</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Gönder
            </button>
          </form>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İletişim Bilgilerimiz</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>E-posta:</strong> <a href="mailto:info@cosmonav.com" className="text-blue-600 hover:underline">info@cosmonav.com</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Telefon:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a>
            </p>

            {/* Harita Bölümü */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bizi Ziyaret Edin</h3>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.842446924038!2d-122.40641728468106!3d37.7833739797588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b4c1d1b5f%3A0x91d37e34f79f2a6c!2sUnited%20States!5e0!3m2!1sen!2s!4v1623458397983!5m2!1sen!2s"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Sosyal Medya Bağlantıları */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sosyal Medya</h3>
              <div className="flex space-x-6">
                <a href="https://facebook.com/cosmonav" className="text-blue-600 hover:underline text-lg" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://twitter.com/cosmonav" className="text-blue-400 hover:underline text-lg" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://instagram.com/cosmonav" className="text-pink-600 hover:underline text-lg" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
