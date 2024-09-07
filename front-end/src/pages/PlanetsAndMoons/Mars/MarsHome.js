// src/pages/PlanetsAndMoons/Mars/MarsHome.js
import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';

function MarsHome() {
  const marsMenuItems = [
    { path: "/gezegenler-ve-uydular/mars/mars-atmosferi-ve-iklimi", label: "Mars Atmosferi ve İklimi" },
    { path: "/gezegenler-ve-uydular/mars/mars-yuzeyi-ve-topografyası", label: "Mars Yüzeyi ve Topografyası" },
    { path: "/gezegenler-ve-uydular/mars/mars-su-kaynaklari", label: "Mars Su Kaynakları" },
    { path: "/gezegenler-ve-uydular/mars/mars-yasanabilirligi", label: "Mars Yaşanabilirliği" },
    { path: "/gezegenler-ve-uydular/mars/mars-gorevleri", label: "Mars Görevleri" },
    { path: "/gezegenler-ve-uydular/mars/mars-jeolojik-zaman-cizelgesi", label: "Mars Jeolojik Zaman Çizelgesi" },
    { path: "/gezegenler-ve-uydular/mars/mars-uydulari", label: "Mars'ın Uyduları" },
  ];

  return (
    <div>
      {/* title prop'u ile Mars başlığı geçildi */}
      <Sidebar menuItems={marsMenuItems} title="Mars" />
      <div className="ml-64 p-8"> {/* Sidebar genişliği için sol marjin eklendi */}
        {/* <h1 className="text-3xl font-bold">Mars Home Page</h1> */}
        {/* Mars ile ilgili içerik buraya gelecek */}
      </div>
    </div>
  );
}

export default MarsHome;
