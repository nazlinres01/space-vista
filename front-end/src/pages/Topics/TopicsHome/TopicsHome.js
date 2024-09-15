// src/pages/Home.js
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

const menuItems = [
  { path: "/konular/gezegenler-ve-uydular", label: "Gezegenler ve Uydular" },
  { path: "/konular/yildizlar-ve-galaksiler", label: "Yıldızlar ve Galaksiler" },
  { path: "/konular/gunes-ve-gunes-aktivitesi", label: "Güneş ve Güneş Aktivitesi" },
  { path: "/konular/uzaydaki-yasam", label: "Uzaydaki Yaşam" },
  {
    path: "/konular/uzay-yolculugu-ve-gelecek-misyonlar",
    label: "Uzay Yolculuğu ve Gelecek Misyonlar",
  },
  {
    path: "/konular/uzay-olaylari-ve-doga-olaylari",
    label: "Uzay Olayları ve Doğa Olayları",
  },
];

export const TopicsHome = () => {
  return (
    <div className="flex">
      <Sidebar menuItems={menuItems} title="Ana Menü" />
      <div className="ml-64 p-8">
      </div>
    </div>
  );
};
