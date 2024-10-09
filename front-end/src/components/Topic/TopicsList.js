// src/components/TopicsList.js
import React from "react";
import TopicCard from "./TopicCard"; // TopicCard bileşeni

const TopicsList = ({ topics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 mt-20">
      {topics.map((topic) => (
        <TopicCard key={topic.path} topic={topic} />
      ))}
    </div>
  );
};

export default TopicsList;
