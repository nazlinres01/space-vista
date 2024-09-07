import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation ekledik
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
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
          <li>
            <Link
              to="/mars-atmosphere-and-climate"
              className={getLinkClass("/mars-atmosphere-and-climate")}
              onClick={toggleMenu}
            >
              Mars Atmosferi ve İklimi
            </Link>
          </li>
          <li>
            <Link
              to="/mars-surface-and-topography"
              className={getLinkClass("/mars-surface-and-topography")}
              onClick={toggleMenu}
            >
              Mars Yüzeyi ve Topografyası
            </Link>
          </li>
          <li>
            <Link
              to="/mars-water-resources"
              className={getLinkClass("/mars-water-resources")}
              onClick={toggleMenu}
            >
              Mars Su Kaynakları
            </Link>
          </li>
          <li>
            <Link
              to="/mars-habitability"
              className={getLinkClass("/mars-habitability")}
              onClick={toggleMenu}
            >
              Mars Yaşanabilirliği
            </Link>
          </li>
          <li>
            <Link
              to="/mars-missions"
              className={getLinkClass("/mars-missions")}
              onClick={toggleMenu}
            >
              Mars Görevleri
            </Link>
          </li>
          <li>
            <Link
              to="/mars-geological-timeline"
              className={getLinkClass("/mars-geological-timeline")}
              onClick={toggleMenu}
            >
              Mars Jeolojik Zaman Çizelgesi
            </Link>
          </li>
          <li>
            <Link
              to="/mars-moons"
              className={getLinkClass("/mars-moons")}
              onClick={toggleMenu}
            >
              Mars'ın Uyduları
            </Link>
          </li>
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
