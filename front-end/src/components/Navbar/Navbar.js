// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Sol tarafta logo */}
      <div className="text-white text-2xl font-bold tracking-wider hover:text-yellow-500 transition-colors duration-300">
        <Link to="/">ProjeLogo</Link>
      </div>

      {/* Sağ tarafta menüler */}
      <div className="space-x-6 text-white text-lg">
        <Link
          to="/hakkinda"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline"
        >
          Hakkında
        </Link>
        <Link
          to="/konular"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline"
        >
          Konular
        </Link>
        <Link
          to="/egitimler"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline"
        >
          Eğitimler
        </Link>
        <Link
          to="/yapay-zeka"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline"
        >
          Yapay Zeka
        </Link>

        <Link
          to="/iletisim"
          className="hover:text-yellow-500 transition-colors duration-300 hover:underline"
        >
          İletişim
        </Link>
        <Link
          to="/giris"
          className="bg-transparent hover:bg-yellow-500 text-white font-semibold py-2 px-4 border border-yellow-500 hover:border-transparent rounded transition-all duration-300"
        >
          Giriş
        </Link>
        <Link
          to="/kayit-ol"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
        >
          Kayıt Ol
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
