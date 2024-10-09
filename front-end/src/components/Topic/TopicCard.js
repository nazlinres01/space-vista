// src/components/TopicCard.js
import React from "react";

const TopicCard = ({ topic }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <img
        src={topic.image}
        alt={topic.label}
        className="w-full h-72 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{topic.label}</h2>
        <p className="text-gray-600 mb-4">{topic.description}</p>
        <a
          href={topic.path}
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200 hover:bg-blue-700"
        >
          Daha Fazla Oku
        </a>
      </div>
    </div>
  );
};

export default TopicCard;
