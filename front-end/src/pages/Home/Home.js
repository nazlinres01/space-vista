// src/pages/Home.js
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const menuItems = [
  { path: "/gezegenler-ve-uydular", label: "Gezegenler ve Uydular" },
  { path: "/yildizlar-ve-galaksiler", label: "Yıldızlar ve Galaksiler" },
  { path: "/gunes-ve-gunes-aktivitesi", label: "Güneş ve Güneş Aktivitesi" },
  { path: "/uzaydaki-yasam", label: "Uzaydaki Yaşam" },
  {
    path: "/uzay-yolculugu-ve-gelecek-misyonlar",
    label: "Uzay Yolculuğu ve Gelecek Misyonlar",
  },
  {
    path: "/uzay-olaylari-ve-doga-olaylari",
    label: "Uzay Olayları ve Doğa Olayları",
  },
];

export const Home = () => {
  return (
    <div className="flex">
      <Sidebar menuItems={menuItems} title="Ana Menü" />
      <div className="ml-64 p-8">
      </div>
    </div>
  );
};
