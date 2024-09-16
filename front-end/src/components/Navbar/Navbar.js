// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6 flex items-center justify-between shadow-lg sticky top-0 z-50">
      {/* Sol tarafta logo */}
      <div className="text-white text-3xl font-bold tracking-wider hover:text-yellow-500 transition-colors duration-300">
        <Link to="/">ProjeLogo</Link>
      </div>

      {/* Sağ tarafta menüler */}
      <div className="space-x-6 text-white text-lg flex items-center">
        <Link
          to="/hakkinda"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-1 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          Hakkında
        </Link>
        <Link
          to="/konular"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-1 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          Konular
        </Link>
        <Link
          to="/egitimler"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-1 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          Eğitimler
        </Link>
        <Link
          to="/yapay-zeka"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-1 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          Yapay Zeka
        </Link>
        <Link
          to="/iletisim"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-1 before:bg-yellow-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          İletişim
        </Link>
        <Link
          to="/giris"
          className="bg-transparent hover:bg-yellow-500 text-white font-semibold py-3 px-6 border border-yellow-500 hover:border-transparent rounded-lg transition-all duration-300"
        >
          Giriş
        </Link>
        <Link
          to="/kayit-ol"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Kayıt Ol
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
