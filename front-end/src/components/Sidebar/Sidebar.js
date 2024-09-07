// src/components/Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation ekledik
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Mevcut sayfanın yolunu almak için

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Seçili öğeye özel stil vermek için bir yardımcı fonksiyon
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-500 font-semibold" // Seçili olan stil
      : "text-gray-300 hover:text-yellow-500 transition-colors duration-300"; // Hover stili
  };

  return (
    <div>
      {/* Menü ikonu (açma kapama) */}
      <button onClick={toggleMenu} className="text-white text-2xl p-4 bg-gray-900 fixed top-0 left-0 z-50">
        <FaBars />
      </button>

      {/* Menü alanı */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-8 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Kapatma ikonu */}
        <button onClick={toggleMenu} className="text-white text-2xl mb-6">
          <FaTimes />
        </button>

        {/* Menü öğeleri */}
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={getLinkClass(item.path)}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menü açık olduğunda arka planı karartan alan */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
