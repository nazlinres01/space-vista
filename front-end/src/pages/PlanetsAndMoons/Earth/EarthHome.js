import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';

function EarthHome() {
  const menuItems = [
    { path: '/gezegenler-ve-uydular/dunya/dunya-atmosferi-ve-iklimi', label: 'Dünya Atmosferi ve İklimi' },
    { path: '/gezegenler-ve-uydular/dunya/dunya-yuzeyi-ve-topografyasi', label: 'Dünya Yüzeyi ve Topografyası' },
    { path: '/gezegenler-ve-uydular/dunya/dunya-su-kaynaklari', label: 'Dünya Su Kaynakları' },
    { path: '/gezegenler-ve-uydular/dunya/dunya-yasanabilirligi', label: 'Dünya Yaşanabilirliği' },
    { path: '/gezegenler-ve-uydular/dunya/dunya-gorevleri', label: 'Dünya Görevleri' },
    { path: '/gezegenler-ve-uydular/dunya/dunya-jeolojik-zaman-cizelgesi', label: 'Dünya Jeolojik Zaman Çizelgesi' },
    { path: '/gezegenler-ve-uydular/dunya/dunya-uydulari', label: 'Dünya Uyduları' },
  ];

  return (
    <div>
      <Sidebar menuItems={menuItems} />
    </div>
  );
}

export default EarthHome;
