// src/pages/PlanetsAndMoons/PlanetsAndMoonsHome.js
import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';


const menuItems = [
  { path: "/konular/gezegenler-ve-uydular/dunya", label: "Dünya" },
  { path: "/konular/gezegenler-ve-uydular/mars", label: "Mars" }
];

export default function PlanetsAndMoonsHome() {
  return (
    <div className="flex">
      <Sidebar menuItems={menuItems} title="Gezegenler ve Uydular" />
      <div className="ml-64 p-8">
        <h1>PlanetsAndMoonsHome</h1>
      </div>
    </div>
  );
}
