// src/pages/PlanetsAndMoons/Earth/EarthHome.js
import React from 'react';
import Sidebar from '../../../../components/Sidebar/Sidebar';

function EarthHome() {
  const menuItems = [
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-atmosferi-ve-iklimi', label: 'Dünya Atmosferi ve İklimi' },
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-yuzeyi-ve-topografyasi', label: 'Dünya Yüzeyi ve Topografyası' },
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-su-kaynaklari', label: 'Dünya Su Kaynakları' },
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-yasanabilirligi', label: 'Dünya Yaşanabilirliği' },
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-gorevleri', label: 'Dünya Görevleri' },
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-jeolojik-zaman-cizelgesi', label: 'Dünya Jeolojik Zaman Çizelgesi' },
    { path: '/konular/gezegenler-ve-uydular/dunya/dunya-uydulari', label: 'Dünya Uyduları' },
  ];

  return (
    <div>
      {/* title prop'u ile Dünya başlığı geçildi */}
      <Sidebar menuItems={menuItems} title="Dünya" />
      <div className="ml-64 p-8"> {/* Sidebar genişliğiyle uyum için sol marjin eklendi */}
        {/* <h1 className="text-3xl font-bold">Dünya Home Page</h1> */}
        {/* Dünya ile ilgili içerik buraya gelecek */}
      </div>
    </div>
  );
}

export default EarthHome;
