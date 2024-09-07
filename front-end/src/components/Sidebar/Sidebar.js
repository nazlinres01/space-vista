// src/components/Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ menuItems, title }) => {  // title prop eklendi
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-500 font-semibold"
      : "text-gray-300 hover:text-yellow-500 transition-colors duration-300";
  };

  return (
    <div>
      {/* Üst menü barı */}
      <div className="fixed top-0 left-0 w-full h-16 bg-gray-900 flex items-center z-50">
        <button onClick={toggleMenu} className="text-white text-2xl p-4 ml-4">
          <FaBars />
        </button>
        {/* Dinamik başlık */}
        <h1 className="text-white text-xl ml-4">{title}</h1>
      </div>

      {/* Sidebar alanı */}
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
