// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar"; // Sidebar bileşeni
import TopicsList from "../../../components/Topic/TopicsList"; // Yeni TopicsList bileşeni
import textData from "../../../data/texts.json"; // JSON dosyasını içe aktar

const TopicsHome = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [topics, setTopics] = useState([]);
  const [introText, setIntroText] = useState("");

  useEffect(() => {
    // JSON'dan verileri al
    setMenuItems(textData.menuItems);
    setTopics(textData.topics);
    setIntroText(textData.introText);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar menuItems={menuItems} title="Ana Menü" />
      <div className="p-20 mt-20">
        {/* Üstten boşluk eklendi */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Uzay Konuları</h1>
        <p className="text-lg text-gray-600 mb-8">{introText}</p>
        <TopicsList topics={topics} /> {/* Yeni TopicsList bileşeni */}
      </div>
    </div>
  );
};

export default TopicsHome;
