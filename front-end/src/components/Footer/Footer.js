import React from "react";

const Footer = () => (
<<<<<<< HEAD
  <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
    <p className="mb-2">© 2024 Cosmohole. Tüm hakları saklıdır.</p>
    <div className="mb-2">
      <a href="/about" className="text-blue-400 hover:underline mx-2">
        Hakkımızda
      </a>
      <a href="/contact" className="text-blue-400 hover:underline mx-2">
        İletişim
      </a>
      <a href="/privacy-policy" className="text-blue-400 hover:underline mx-2">
        Gizlilik Politikası
      </a>
      <a
        href="/terms-of-service"
        className="text-blue-400 hover:underline mx-2"
      >
        Hizmet Şartları
      </a>
    </div>
    <div>
      <a
        href="https://facebook.com"
        className="text-blue-600 mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://twitter.com"
        className="text-blue-400 mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://instagram.com"
        className="text-pink-500 mx-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram">instagram</i>
      </a>
=======
  <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Cosmohole</h3>
          <p className="text-gray-400 mb-4">
            Cosmohole, uzay keşifleri ve bilimsel araştırmalara odaklanan yenilikçi bir platformdur. Kullanıcı dostu araçlarımızla derin uzay verilerini keşfetmek çok kolay!
          </p>
          <p className="text-gray-400">
            <strong>Adres:</strong> 123 Space Ave, Universe City, Galaxy
          </p>
          <p className="text-gray-400">
            <strong>Email:</strong> <a href="mailto:support@cosmohole.com" className="hover:text-blue-400 transition">support@cosmohole.com</a>
          </p>
          <p className="text-gray-400">
            <strong>Telefon:</strong> +1 234 567 8900
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hızlı Linkler</h3>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                İletişim
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-blue-400 transition">
                Gizlilik Politikası
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-blue-400 transition">
                Hizmet Şartları
              </a>
            </li>
            <li>
              <a href="/sitemap" className="hover:text-blue-400 transition">
                Site Haritası
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us & Social Media Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Bizi Takip Edin</h3>
          <p className="text-gray-400 mb-4">
            En son gelişmelerden haberdar olmak için sosyal medyada bizi takip edin.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition-colors"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <i className="fab fa-youtube text-3xl"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Bültene Abone Ol</h3>
          <p className="text-gray-400 mb-6">
            Uzay keşifleri, bilimsel gelişmeler ve özel etkinliklerden haberdar olmak için bültenimize abone olun.
          </p>
          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              className="w-full sm:w-auto p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email adresiniz"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
              Abone Ol
            </button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Verileriniz gizli tutulur ve asla üçüncü şahıslarla paylaşılmaz.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 mb-4">© 2024 Cosmohole. Tüm hakları saklıdır.</p>
        <div className="space-x-4">
          <a href="/about" className="text-gray-400 hover:text-gray-200">
            Hakkımızda
          </a>
          <a href="/contact" className="text-gray-400 hover:text-gray-200">
            İletişim
          </a>
          <a href="/privacy-policy" className="text-gray-400 hover:text-gray-200">
            Gizlilik Politikası
          </a>
        </div>
      </div>
>>>>>>> nazli
    </div>
  </footer>
);

export default Footer;
