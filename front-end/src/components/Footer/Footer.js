// src/components/Footer/Footer.js
import React from "react";

const Footer = () => (
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
    </div>
  </footer>
);

export default Footer;
